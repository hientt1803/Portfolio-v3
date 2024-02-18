import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import WorkLayout from "../layout";

export interface Artwork {
  artist: string;
  art: string;
}

export const works: Artwork[] = [
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
    <WorkLayout>
      <ScrollArea className="min-w-screen min-h-screen whitespace-nowrap rounded-md border bg-black">
        <div className="container flex w-max h-max gap-x-20 p-20 bg-red-600">
          {works.map((artwork) => (
            <figure key={artwork.artist} className="w-full h-full">
              <div className="overflow-hidden rounded-md">
                <Image
                  src={artwork.art}
                  alt={`Photo by ${artwork.artist}`}
                  className="h-full w-full object-cover"
                  width={1360}
                  height={800}
                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                Photo by{" "}
                <span className="font-semibold text-foreground">
                  {artwork.artist}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </WorkLayout>
  );
};

export default WorkPage;
