import Image from "next/image";
import Link from "next/link";
import CoolImage from "../image";

export default function Cardsection(props: {
  Fetchdata: any;
  SectionText: string;
}) {
  const data = props.Fetchdata.results;
  const SectionText = props.SectionText;
  return (
    <>
      <section className="w-full py-6 ">
        <div className="container-fluid px-2">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              {SectionText}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 lg:gap-6">
            {data.map((data: any, index: any) => (
              <div
                key={index}
                className="group relative rounded-lg overflow-hidden"
              >
                <Link
                  href={`/info/${data.id}`}
                  className="block"
                  prefetch={false}
                >
                  <CoolImage
                    src={data.image}
                    width={180}
                    height={250}
                    alt="Anime Thumbnail"
                    className="w-full h-auto aspect-[3/4] object-cover group-hover:scale-105 transition-transform rounded-xl"
                  />
                  <div className="mt-2">
                    <h3 className="text-base font-semibold group-hover:underline">
                      {data.title.english ||
                        data.title.native ||
                        data.title.romaji}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate overflow-hidden max-w-full">
                      {data.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
