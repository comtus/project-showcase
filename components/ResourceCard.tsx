import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

interface Props {
  id: string;
  title: string;
  image: string;
  views: number;
  downloadLink: string;
}

const ResourceCard = ({ id, title, image, views, downloadLink }: Props) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <Link href={`/resource/${id}`}>
        <CardHeader className="flex-center flex-col place-items-center items-center gap-2.5 !p-0">
          <div className="h-fit w-full">
            <Image
              src={image}
              className="h-full rounded-md object-cover"
              width={300}
              height={400}
              alt={title}
            />
          </div>
          <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">
            {title}
          </CardTitle>
        </CardHeader>
      </Link>

      <CardContent className="flex-between mt-4 p-0">
        <div className="flex-center text-gradient_blue-purple body-semibold gap-1.5">
          <p>Views</p>

          <p>{views}</p>
        </div>

        <Link
          href={"/"}
          className="flex-center text-gradient_blue-purple body-semibold gap-1.5"
        >
          Launch App
          <Image src="/arrow-blue.svg" width={15} height={10} alt="arrow" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
