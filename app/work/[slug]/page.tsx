import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface Artwork {
  artist: string;
  art: string;
}

const works = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1682547094948-1d764fc412ce?w=1280&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1682547094948-1d764fc412ce?w=1280&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1682547094948-1d764fc412ce?w=1280&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1682547094948-1d764fc412ce?w=1280&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1682547094948-1d764fc412ce?w=1280&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1682547094948-1d764fc412ce?w=1280&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1682547094948-1d764fc412ce?w=1280&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1682547094948-1d764fc412ce?w=1280&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1682547094948-1d764fc412ce?w=1280&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1682547094948-1d764fc412ce?w=1280&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1682547094948-1d764fc412ce?w=1280&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1682547094948-1d764fc412ce?w=1280&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
  },
];

const WorkPage = () => {
  return (
    <>
      {works.map((artwork) => (
        <ScrollArea
          key={artwork.artist}
          className="min-w-screen min-h-screen bg-black z-50"
        >
          <div className="container flex justify-center items-center gap-x-20 w-full h-full">
            <div className="overflow-hidden rounded-md">
              <Image
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="h-full w-full object-cover z-[51]"
                width={1000}
                height={800}
              />
            </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      ))}
    </>
  );
};

export default WorkPage;
