import AccordionInfo from "@/shared/components/shared/accordion-info";
import Container from "@/shared/components/shared/Container";
import GetInLineSection from "@/shared/components/shared/get-in-line-section";
import ImgageCarousel from "@/shared/components/shared/image-carousel";
import MainPageSection from "@/shared/components/shared/main-page-section";
import ResurtStories from "@/shared/components/shared/result-stories";
import carParts from "@/public/assets/images/car-parts.png";
import Image from "next/image";
import { Button } from "@/shared/components/ui/button";
import { Star } from "lucide-react";
import {
  Wrench,
  ShieldCheck,
  Clock3,
  PhoneCall,
  MapPin,
  Leaf,
} from "lucide-react";

export default async function Home() {
  const features = [
    { icon: Wrench, title: "Certified Technicians" },
    { icon: ShieldCheck, title: "Warranty on Repairs" },
    { icon: Clock3, title: "Fast Turnaround" },
    { icon: PhoneCall, title: "24/7 Support" },
    { icon: MapPin, title: "1600+ US Locations" },
    { icon: Leaf, title: "Eco-Friendly Materials" },
  ];

  const images = [
    "https://t4.ftcdn.net/jpg/05/21/93/17/360_F_521931702_TXOHZBa3tLVISome894Zc061ceab4Txm.jpg",
    "https://thumbs.dreamstime.com/b/worker-uniform-disassembles-vehicle-engine-car-service-station-automobile-checking-inspection-professional-diagnostics-173424972.jpg",
    "https://www.shutterstock.com/image-photo/mechanic-man-examining-maintenance-customer-600nw-1505133050.jpg",
    "https://st4.depositphotos.com/1006542/22238/i/450/depositphotos_222385896-stock-photo-male-technician-works-car-engine.jpg",
  ];

  return (
    <div className="w-full mb-12">
      <div className="h-screen w-full -mt-[72px] relative">
        <div
          className="absolute bg-cover inset-0 bg-center bg-no-repeat "
          style={{
            backgroundImage:
              "url(https://cdnb.artstation.com/p/assets/images/images/004/235/219/large/sebastian-leon-silva-garage-conceptfinal.jpg?1481605285)",
          }}
        />
        <MainPageSection />
      </div>
      <Container>
        <ResurtStories />
        <div className="w-full px-12 py-24 flex gap-16 justify-between">
          <ImgageCarousel images={images} className="grow w-0" />
          <div className="grow w-0">
            <h2 className="text-5xl font-bold">How it works</h2>
            <AccordionInfo />
          </div>
        </div>
        <div className="flex justify-between p-6 gap-12 items-start">
          <div className="w-0 grow">
            <section className="py-12">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Why Choose Us?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {features.map(({ icon: Icon, title }) => (
                  <div
                    key={title}
                    className="flex items-center gap-4 p-4 bg-muted/10 rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    <Icon className="w-6 h-6 text-primary" />
                    <span className="font-medium">{title}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div className="w-0 grow">
            <p className="text-2xl font-light">About</p>
            <p className="text-5xl font-bold mt-3">
              Professional Car Services Since 1991
            </p>
            <p className="mt-3 font-thin">
              Vehicles are becoming ever more complex and challenging to repair.
              Our service has the upper hand in overcoming these challenges by
              pairing technology and innovation and highly skilled technicians
              to meet the customer’s needs. With over 1,600 locations in the US,
              you can be assured that.
            </p>
            <div className="w-full flex justify-between items-center">
              <Image
                src={carParts}
                alt="car parts"
                height={130}
                className="mt-4"
              />
              <div className="w-0 grow">
                <div className="flex gap-3">
                  <Star />
                  <p className="font-bold hover:text-primary cursor-pointer transition-all transform hover:translate-x-2">
                    Have 24 Hour Emergency hotline
                  </p>
                </div>
                <div className="flex gap-3">
                  <Star />
                  <p className="font-bold hover:text-primary cursor-pointer transition-all transform hover:translate-x-2">
                    Mobile Diagnostic Service
                  </p>
                </div>
                <div className="flex gap-3">
                  <Star />
                  <p className="font-bold hover:text-primary cursor-pointer transition-all transform hover:translate-x-2">
                    Manage your Car Online 24/7
                  </p>
                </div>
                <Button variant={"link"} className="mt-4">
                  Get started
                </Button>
              </div>
            </div>
          </div>
        </div>
        <GetInLineSection className="w-full mt-24" />
      </Container>
    </div>
  );
}
