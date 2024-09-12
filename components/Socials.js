//links
import Link from "next/link";

//icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";

const Socials = () => {
  return ( 
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={''} className="">
        <RiYoutubeLine className="hover:text-accent transition-all duration-300" />
      </Link>
      <Link href={''} className="">
        <RiInstagramLine className="hover:text-accent transition-all duration-300" />
      </Link>
      <Link href={''} className="">
        <RiFacebookLine className="hover:text-accent transition-all duration-300" />
      </Link>
      <Link href={''} className="">
        <RiDribbbleLine className="hover:text-accent transition-all duration-300" />
      </Link>
      <Link href={''} className="">
        <RiBehanceLine className="hover:text-accent transition-all duration-300" />
      </Link>
      <Link href={''} className="">
        <RiPinterestLine className="hover:text-accent transition-all duration-300" />
      </Link>
    </div>
  );
};

export default Socials;
