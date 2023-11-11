import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" w-full p-4 sm:p-6 sm:px-4">
      <div className="mx-auto max-w-[1080px] text-md text-center">
        <span>
          © {new Date().getFullYear()}{" "}
          <Link
            href="https://t.me/neel_ds"
            target="_blank"
            className="hover:font-bold"
          >
            TipX
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
