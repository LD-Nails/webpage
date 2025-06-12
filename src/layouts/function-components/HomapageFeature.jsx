import { humanize } from "@/lib/utils/textConverter";
import { Image } from "astro:assets";
import * as Icon from "react-feather";
import { FaWalking } from "react-icons/fa";


// const ImageOrIcon = ({icon_name}) => {

// };

const HomapageFeature = ({ feature_list }) => {
  return (
    <div className="key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4">
      {feature_list.map((item, i) => {
        let FeatherIcon = undefined;
        if(humanize(item.icon) in Icon) {
          const IconElem = Icon[humanize(item.icon)];
          FeatherIcon = <IconElem />
          // return <IconElem />
        } else {
          const src = `/images/icons/${humanize(item.icon)}.svg`;
          FeatherIcon = <img src={src} alt="My SVG" />;
          // console.log(src);
          // return <Icon name={humanize(icon_name)} />
        }

        return (
          <div
            key={i}
            className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg"
          >
            <div>
              <h3 className="h4 text-xl lg:text-2xl">{item.title}</h3>
              <p>{item.content}</p>
            </div>
            <span className="icon mt-4">
              {/* <ImageOrIcon icon_name={item.icon} /> */}
                {FeatherIcon}
              {/* {FeatherIcon()} */}
              {/* <FeatherIcon /> */}
              {/* <Image
                class="w-full object-contain"
                alt="banner"
                src={}
                width={24}
                height={24}
              /> */}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default HomapageFeature;
