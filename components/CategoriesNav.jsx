import dog from "../public/images/categories/dog.png";
import cat from "../public/images/categories/cat.png";
import bird from "../public/images/categories/bird.png";
import rodent from "../public/images/categories/rodent.png";
import shelter from "../public/images/categories/shelter.png";

import "./CategoriesNav.scss";
import Image from "next/image";
import Link from "next/link";

const CategoriesNav = () => {
  return (
    <div className="categories section-narrow">
      <h2>Categorii</h2>
      <div className="container">
        <Link href="" className="item">
          <Image src={shelter} alt="dog" width={80} />
          Adaposturi
        </Link>
        <Link href="/categories/Catel" className="item">
          <Image src={dog} alt="dog" width={80} />
          Caini
        </Link>
        <Link href="/categories/Pisica" className="item">
          <Image src={cat} alt="cat" width={80} />
          Pisici
        </Link>
        <Link href="/categories/Pasare" className="item">
          <Image src={bird} alt="bird" width={80} />
          Pasari
        </Link>
        <Link href="/categories/Rozatoare" className="item">
          <Image src={rodent} alt="rodent" width={80} />
          Rozatoare
        </Link>
      </div>
    </div>
  );
};

export default CategoriesNav;
