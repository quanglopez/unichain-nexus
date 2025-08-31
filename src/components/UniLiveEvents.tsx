import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Calendar, MapPin, Users } from "lucide-react";

export const UniLiveEvents = () => {
  const events = [
    {
      title: "UniLive Hồ Chí Minh City",
      description: "Community gathering in Vietnam's largest city showcasing UniLive's impact",
      image: "/lovable-uploads/76bc4130-44cc-4a6d-8481-d5cb23e5d6bf.png",
      videoUrl: "https://www.youtube.com/watch?v=g2o3QupxX-o",
      location: "Hồ Chí Minh City, Vietnam",
      attendees: "50+ Members"
    },
    {
      title: "WEB3 Elite Night Vietnam 2025",
      description: "Exclusive blockchain and crypto event with 200+ industry leaders",
      image: "/lovable-uploads/4103a004-f814-4e31-bee9-24616a6c49d2.png",
      videoUrl: "https://www.youtube.com/watch?v=L-gI8iQxljU",
      location: "Vietnam",
      attendees: "200+ Guests"
    },
    {
      title: "UniLive GM Vietnam 2025",
      description: "Grand opening and community celebration in Vietnam",
      image: "/lovable-uploads/a4410b01-006d-41ed-a2e6-ed4eef17df5d.png",
      videoUrl: "https://www.youtube.com/watch?v=_6eTip4pWoI",
      location: "Vietnam",
      attendees: "100+ Community Members"
    }
  ];

  const highlights = [
    {
      title: "Keynote by UniMex Builder Hunter",
      image: "/lovable-uploads/35be348f-e81b-4daa-989e-a8809d047250.png",
      description: "Industry insights and platform updates"
    },
    {
      title: "Beat Party - DJ Ignites the Night",
      image: "/lovable-uploads/fd8009ab-aad0-432a-af82-1d74eed0c2be.png",
      description: "Entertainment and networking celebration"
    },
    {
      title: "GAT Investment Bank Partnership",
      image: "/lovable-uploads/720b2b1f-11d3-4712-9424-5a129a551935.png",
      description: "Strategic partnership announcement with General Manager Lucy"
    },
    {
      title: "Global Industry Leaders Gathering",
      image: "/lovable-uploads/866748b9-ca77-4689-bf5e-c8fe80ec3362.png",
      description: "200+ industry professionals network and collaborate"
    },
    {
      title: "Community Charity Initiative",
      image: "/lovable-uploads/fb6af137-cd8c-4f90-90b3-ef8fd5723116.png",
      description: "Giving back to local communities and schools"
    },
    {
      title: "International Team Collaboration",
      image: "/lovable-uploads/bfb5d34e-dd24-4edc-9d9d-bf429984c19c.png",
      description: "Vietnam-Singapore partnership expansion"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-glow">UniLive</span>
            <br />
            <span className="text-foreground/80">Global Events</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Experience the energy and innovation of UniLive through our worldwide community events, conferences, and celebrations.
          </p>
        </div>

        {/* Featured Events with Videos */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <Card key={index} className="glass overflow-hidden group hover:scale-105 transition-smooth">
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                  <Button 
                    asChild 
                    variant="hero" 
                    size="lg"
                    className="gap-2"
                  >
                    <a 
                      href={event.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Play className="w-5 h-5" />
                      Watch Video
                    </a>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <p className="text-foreground/70 mb-4">{event.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <Users className="w-4 h-4" />
                    {event.attendees}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Event Highlights Gallery */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Event Highlights
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="glass overflow-hidden group hover:scale-105 transition-smooth">
                <div className="relative">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="absolute bottom-2 left-2 right-2">
                      <h4 className="text-white text-sm font-semibold mb-1">{highlight.title}</h4>
                      <p className="text-white/80 text-xs">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="glass border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Join Our Next Event</h3>
              <p className="text-foreground/70 mb-6">
                Be part of the UniLive community and experience the future of Web3 innovation firsthand.
              </p>
              <Button 
                asChild 
                variant="hero" 
                size="lg"
              >
                <a 
                  href="https://h.tsggwh.com/#/login?recomId=gsZKfD&language=en_US" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Get Notified About Events
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};