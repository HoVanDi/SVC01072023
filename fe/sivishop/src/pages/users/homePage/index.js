import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import cat1Img from "assets/users/images/categories/cat-1.jpg";
import cat2Img from "assets/users/images/categories/cat-2.jpg";
import cat3Img from "assets/users/images/categories/cat-3.jpg";
import cat4Img from "assets/users/images/categories/cat-4.webp";
import cat5Img from "assets/users/images/categories/cat-5.webp";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import cat6Img from "assets/users/images/categories/cat-6.webp";

const HomaPage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const sliderItems = [
    {
      bgImg: cat1Img,
      name: "Táo đỏ",
    },

    {
      bgImg: cat2Img,
      name: "Cam tươi",
    },

    {
      bgImg: cat3Img,
      name: "Ca Chua tươi",
    },

    {
      bgImg: cat4Img,
      name: "Nho tươi",
    },
    {
      bgImg: cat5Img,
      name: "Nho tươi",
    },
  ];

  const featProducts = {
    all: {
      title: "toàn bộ",
      products: [
        {
          img: "",
          name: "Thịt bò khô",
          price: 20000,
        },
      ],
    },

    freshMeat: {
      title: "thịt tươi",
      products: [
        {
          img: "",
          name: "Thịt bò khô tươi",
          price: 20000,
        },
      ],
    },
  };

  const renderFeaturedProducts = (data) => {
    const tabList = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);

      const tabPanel = [];
      data[key].products.forEach((item, j) => {
        tabPanel.push(<div key={j}>{item.name}</div>);
      });

      tabPanels.push(tabPanel);
    });
    return (
      <Tabs>
        <TabList>{tabList}</TabList>

        {tabPanels.map((item, key) => (
          <TabPanel key={key}>
            <div className="row">{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    );
  };

  return (
    <>
      {/* categories begins */}
      <div className="container container_categories_slider">
        <Carousel responsive={responsive} className="categories_slider">
          {sliderItems.map((item, key) => (
            <div
              key={key}
              className="categories_slider_item"
              style={{ backgroundImage: `url(${item.bgImg})` }}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {/* categories end */}

      {/* Featured begins */}
      <div className="container">
        <div className="featured">
          <div className="section-title">
            <h2>Sản phẩm nổi bật</h2>
          </div>
          {renderFeaturedProducts(featProducts)}
        </div>
      </div>
      {/* Featured end */}
    </>
  );
};

export default memo(HomaPage);
