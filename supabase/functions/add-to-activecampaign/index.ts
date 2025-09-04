import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactRequest {
  "Full Name": string;
  "Email": string;
  "Investment Interest"?: string;
  "Telegram"?: string;
  "Country"?: string;
  "Form Type"?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { 
      status: 405, 
      headers: corsHeaders 
    });
  }

  try {
    const acUrl = Deno.env.get('AC_URL');
    const acKey = Deno.env.get('AC_KEY');
    const acListId = Deno.env.get('AC_LIST_ID');
    const acTagId = Deno.env.get('AC_TAG_ID');

    if (!acUrl || !acKey || !acListId || !acTagId) {
      console.error('Missing ActiveCampaign configuration');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const contactData: ContactRequest = await req.json();
    console.log('Received contact data:', contactData);

    // Create or update contact in ActiveCampaign
    const contact = {
      contact: {
        email: contactData.Email,
        firstName: contactData["Full Name"].split(' ')[0] || contactData["Full Name"],
        lastName: contactData["Full Name"].split(' ').slice(1).join(' ') || '',
        phone: contactData.Telegram || '',
        fieldValues: [
          {
            field: "1", // Assuming custom field for investment interest
            value: contactData["Investment Interest"] || "Not specified"
          },
          {
            field: "2", // Assuming custom field for country
            value: contactData.Country || "Not specified"
          },
          {
            field: "3", // Assuming custom field for form type
            value: contactData["Form Type"] || "Investment Form"
          }
        ]
      }
    };

    // Create/Update contact
    const contactResponse = await fetch(`${acUrl}/api/3/contacts`, {
      method: 'POST',
      headers: {
        'Api-Token': acKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    });

    let contactResult;
    if (contactResponse.ok) {
      contactResult = await contactResponse.json();
      console.log('Contact created/updated:', contactResult.contact?.id);
    } else {
      // If contact exists, try to find it
      const searchResponse = await fetch(`${acUrl}/api/3/contacts?email=${encodeURIComponent(contactData.Email)}`, {
        headers: {
          'Api-Token': acKey,
          'Content-Type': 'application/json',
        },
      });
      
      if (searchResponse.ok) {
        const searchResult = await searchResponse.json();
        if (searchResult.contacts && searchResult.contacts.length > 0) {
          contactResult = { contact: searchResult.contacts[0] };
          console.log('Found existing contact:', contactResult.contact.id);
        } else {
          throw new Error('Failed to create or find contact');
        }
      } else {
        throw new Error('Failed to create contact and search failed');
      }
    }

    const contactId = contactResult.contact.id;

    // Add contact to list
    const listSubscription = {
      contactList: {
        list: acListId,
        contact: contactId,
        status: 1 // Active
      }
    };

    const listResponse = await fetch(`${acUrl}/api/3/contactLists`, {
      method: 'POST',
      headers: {
        'Api-Token': acKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(listSubscription),
    });

    if (listResponse.ok) {
      console.log('Contact added to list successfully');
    } else {
      console.log('Contact may already be in list or list add failed');
    }

    // Add tag to contact
    const contactTag = {
      contactTag: {
        contact: contactId,
        tag: acTagId
      }
    };

    const tagResponse = await fetch(`${acUrl}/api/3/contactTags`, {
      method: 'POST',
      headers: {
        'Api-Token': acKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactTag),
    });

    if (tagResponse.ok) {
      console.log('Tag added to contact successfully');
    } else {
      console.log('Contact may already have tag or tag add failed');
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact successfully added to ActiveCampaign',
        contactId: contactId
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error('Error in add-to-activecampaign function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Internal server error',
        success: false
      }),
      {
        status: 500,
        headers: { 
          'Content-Type': 'application/json', 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);