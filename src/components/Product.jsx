import React, { useState } from "react";
import "./styles/Product.css";
import SimpleImageSlider from "react-simple-image-slider";
import KingBedTwoToneIcon from "@material-ui/icons/KingBedTwoTone";
import HotelTwoToneIcon from "@material-ui/icons/HotelTwoTone";
import WifiTwoToneIcon from "@material-ui/icons/WifiTwoTone";
import ImportExportTwoToneIcon from "@material-ui/icons/ImportExportTwoTone";
import LocalParkingRoundedIcon from "@material-ui/icons/LocalParkingRounded";
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";
import TvRoundedIcon from "@material-ui/icons/TvRounded";
import ChildFriendlyRoundedIcon from "@material-ui/icons/ChildFriendlyRounded";
import LaptopWindowsRoundedIcon from "@material-ui/icons/LaptopWindowsRounded";
import AccessibleRoundedIcon from "@material-ui/icons/AccessibleRounded";
import HighlightOffSharpIcon from "@material-ui/icons/HighlightOffSharp";
import StarIcon from "@material-ui/icons/Star";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Modal from "react-awesome-modal";
import DatePicker from "./DatePicker";
import { Avatar } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SubIcon from "@material-ui/icons/Remove";
import Clear from "@material-ui/icons/ClearRounded";
import Hamburger from "@material-ui/icons/MenuRounded";
import Checkbox from "@material-ui/core/Checkbox";

function Hotel({ id }) {
  id = {
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    title: "JW Marriot",
    ratings: "4.5",
    ratings_no: "8",
    location: "Bangalore, Karnataka, India",
    sub_title: "Sub-Title",
    guests: "no of Guests per room",
    beds: [true, false],
    bedrooms: [true],
    bathrooms: [true],
    description_short: "short description",
    the_space: "about space",
    guest_access: "details",
    guest_access_points: ["1", "2", "3"],
    other: "other things to note",
    amenities: {
      lift: true,
      ac: false,
      wifi: true,
      parking: true,
      laptop: true,
      disabled: true,
      tv: false,
      infant: false,
    },
    amenities_basic: ["Wifi", "Tv", "Ac", "laptop"],
    amenities_facilities: ["Hot water", "lift", "free parking"],
    amenities_dining: ["microwave", "refrigerator"],
    amenities_bb: ["Hair dryer", "hanger", "shampoo", "Bed linen"],
    amenities_safety: ["fireextinguisher"],
    amenities_notincluded: ["smoke alarms"],
    rating_cleanliness: "4.5",
    rating_communication: "4.5",
    rating_checkin: "4.0",
    rating_accuracy: "4.2",
    rating_Loaction: "3.9",
    rating_value: "5",
    reviews: [
      {
        name: "name 1",
        dated: "october 2020",
        review: "hello iam here. I am there .iam everywhere",
      },
      {
        name: "name 2",
        dated: "october 2020",
        review:
          "hello iam here. I am there .iam everywhere.hello iam here. I am there .iam everywhere",
      },
      {
        name: "name 3",
        dated: "october 2020",
        review:
          "hello iam here. I am there .iam everywherehello iam here. I am there .iam everywherehello iam here. I am there .iam everywhere",
      },
      {
        name: "name 4",
        dated: "october 2020",
        review:
          "hello iam here. I am there .iam everywherehello iam here. I am there .iam everywherehello iam here. I am there .iam everywherehello iam here. I am there .iam everywherehello iam here. I am there .iam everywherehello iam here. I am there .iam everywhere",
      },
      {
        name: "name 5",
        dated: "october 2020",
        review:
          "hello iam here. I am there .iam everywherehello iam here. I am there .iam everywhere",
      },
      {
        name: "name 6",
        dated: "october 2020",
        review:
          "hello iam here. I am there .iam everywherehello iam here. I am there .iam everywhere",
      },
      {
        name: "name 7",
        dated: "october 2020",
        review:
          "hello iam here. I am there .iam everywherehello iam here. I am there .iam everywhere",
      },
      {
        name: "name 8",
        dated: "october 2020",
        review:
          "hello iam here. I am there .iam everywherehello iam here. I am there .iam everywhere",
      },
    ],
    sitter_name: "name",
    sitter_description: "description of sitter",
    sitter_mail: "helllo@gmail.com",
    sitter_phone: "1234567890",
    sitter_care: "4.5",
    sitter_value: "4",
    sitter_knowledge: "4.3",
    sitter_images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    spa_name: "name",
    spa_images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    sap_services: [
      "description of spa",
      "description of spa",
      "description of spa",
    ],
    spa_mail: "helllo@gmail.com",
    spa_phone: "1234567890",
    spa_care: "4.5",
    spa_value: "4",
    spa_quality: "4.3",
    map_description_short: "short description",
    map_description_getting_around:
      "Its a 2 minute walk to the Metro Station.Half a minute walk to the Main Road, where auto-rickshaws will be in abundance.OLA/Uber and other cabs services available 24/7.Within a 2 Kms radius, there are multiple bus stops.If you need to park your 2 or 4 wheeler, we provide ample parking space in our basement.Hosmat Hospital is a 5 minute walk from the guest house.",
    ppn: "2000",
    service_fee: "353",
    taxes: "243",
    spa_cost: "200",
    sitter_cost: "50",
    host_phone: "1234567890",
    host_mail: "qwertyui",
  };
  const [showMore, setShowMore] = useState(true);
  const [showMoremap, setShowMoremap] = useState(true);
  const [showAmenities, setShowAmenities] = useState(false);
  const [no_of_reviews, setno_of_reviews] = useState(3);
  const [showsittercontact, setshowsittercontact] = useState(false);
  const [showspacontact, setshowspacontact] = useState(false);
  const [showhostcontact, setshowhostcontact] = useState(false);
  const [showspa, setshowspa] = useState(false);
  const [showguests, setshowguests] = useState(false);
  const [adultNumber, setAdultNumber] = useState(0);
  const [childernNumber, setChildernNumber] = useState(0);
  const [infantNumber, setInfantNumber] = useState(0);
  const [petNumber, setPetNumber] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [select_spa, setselect_spa] = useState(false);
  const [select_sitter, setselect_sitter] = useState(false);

  function Ratingbar(props) {
    return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" value={props.value * 20} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">
            {props.value}
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <div>
      <div
        className={
          !showAmenities ? "hotel-wrapper-enabled" : "hotel-wrapper-disabled"
        }
      >
        <div className="leftpane">
          <div className="title">
            <h1>{id.title}</h1>
            <div className="hotel-location">{id.location}</div>
            <div id="rating-star">
              <StarIcon />{" "}
            </div>
            <text id="ratings">
              {id.ratings} ({id.ratings_no})
            </text>
          </div>
          <div className="picture">
            <SimpleImageSlider
              width={796}
              height={504}
              className="picture-slider"
              images={id.images}
            />
          </div>
          <div className="subtitle">
            <p>
              <strong>{id.sub_title}</strong>
              <br></br>
              {id.guests} {id.guests > 1 ? "Guests" : "Guest"} .{" "}
              {id.bedrooms.length}{" "}
              {id.bedrooms.length > 1 ? "Bedrooms" : "Bedroom"} .{" "}
              {id.beds.length} {id.beds.length > 1 ? "Beds" : "Bed"} .{" "}
              {id.bathrooms.length} .{" "}
              {id.bathrooms.length > 1
                ? "Private Bathrooms"
                : "Private Bathroom"}
              <br></br>
            </p>
          </div>

          <div className="description">
            {/* the showmore content should include the contents which are shown in brief */}

            <div className={!showMore ? "showmore" : "showless"}>
              {id.description_short}
            </div>

            <div
              id="showmore"
              onClick={() => {
                if (!showMore) {
                  setShowMore(true);
                } else {
                  setShowMore(false);
                }
              }}
            >
              {showMore ? "⬇ More" : "⬆ Less"}
            </div>

            <div className={showMore ? "showmore" : "showless"}>
              {id.description_short}
              <h5>The Space</h5>
              {id.the_space}
              <br />
              <h5>Guest access</h5>
              {id.guest_access}
              {id.guest_access_points.map((point, index) => {
                return (
                  <div className="description-points" key={index}>
                    - {point}
                  </div>
                );
              })}
              <br />
              <h5>Other thing to note</h5>
              {id.other}
              <br />
            </div>
          </div>

          <div className="sleepingarrangements">
            <h3>Sleeping Arrangements</h3>
            {id.bedrooms.map((type, index) => {
              return (
                <div className="bedrooms">
                  {id.beds.map((type) => {
                    return type === true ? (
                      <KingBedTwoToneIcon />
                    ) : (
                      <HotelTwoToneIcon />
                    );
                  })}
                  <h5>Bedroom{index + 1}</h5>
                </div>
              );
            })}
          </div>

          <div className="amenities">
            <h3>Amenities</h3>

            <div className="amenities-wrapper">
              <div classname="amenities-left">
                <div className="amenities-wrapper">
                  <div
                    className={
                      id.amenities.Wifi === true
                        ? "amenity-icon-enabled"
                        : "amenity-icon-disabled"
                    }
                  >
                    <WifiTwoToneIcon />
                  </div>
                  <div
                    className={
                      id.amenities.Wifi === true
                        ? "amenity-type-enabled text"
                        : "amenity-type-disabled text"
                    }
                  >
                    Wifi
                  </div>
                </div>
                <div className="amenities-wrapper">
                  <div
                    className={
                      id.amenities.ac === true
                        ? "amenity-icon-enabled"
                        : "amenity-icon-disabled"
                    }
                  >
                    <AcUnitRoundedIcon />
                  </div>

                  <div
                    className={
                      id.amenities.ac === true
                        ? "amenity-type-enabled text"
                        : "amenity-type-disabled text"
                    }
                  >
                    Air conditioning
                  </div>
                </div>

                <div className="amenities-wrapper">
                  <div
                    className={
                      id.amenities.laptop === true
                        ? "amenity-icon-enabled"
                        : "amenity-icon-disabled"
                    }
                  >
                    <LaptopWindowsRoundedIcon />
                  </div>

                  <div
                    className={
                      id.amenities.laptop === true
                        ? "amenity-type-enabled text"
                        : "amenity-type-disabled text"
                    }
                  >
                    Laptop friendly
                  </div>
                </div>

                <div className="amenities-wrapper">
                  <div
                    className={
                      id.amenities.disabled === true
                        ? "amenity-icon-enabled"
                        : "amenity-icon-disabled"
                    }
                  >
                    <AccessibleRoundedIcon />
                  </div>

                  <div
                    className={
                      id.amenities.disabled === true
                        ? "amenity-type-enabled text"
                        : "amenity-type-disabled text"
                    }
                  >
                    Easy Access for the disabled
                  </div>
                </div>
              </div>

              <div className="amenities-right">
                <div className="amenities-wrapper">
                  <div
                    className={
                      id.amenities.lift === true
                        ? "amenity-icon-enabled"
                        : "amenity-icon-disabled"
                    }
                  >
                    <ImportExportTwoToneIcon />
                  </div>

                  <div
                    className={
                      id.amenities.lift === true
                        ? "amenity-type-enabled text"
                        : "amenity-type-disabled text"
                    }
                  >
                    Lift
                  </div>
                </div>

                <div className="amenities-wrapper">
                  <div
                    className={
                      id.amenities.parking === true
                        ? "amenity-icon-enabled"
                        : "amenity-icon-disabled"
                    }
                  >
                    <LocalParkingRoundedIcon />
                  </div>

                  <div
                    className={
                      id.amenities.parking === true
                        ? "amenity-type-enabled text"
                        : "amenity-type-disabled text"
                    }
                  >
                    Free parking within the premises
                  </div>
                </div>

                <div className="amenities-wrapper">
                  <div
                    className={
                      id.amenities.tv === true
                        ? "amenity-icon-enabled"
                        : "amenity-icon-disabled"
                    }
                  >
                    <TvRoundedIcon />
                  </div>

                  <div
                    className={
                      id.amenities.tv === true
                        ? "amenity-type-enabled text"
                        : "amenity-type-disabled text"
                    }
                  >
                    Cable TV
                  </div>
                </div>

                <div className="amenities-wrapper">
                  <div
                    className={
                      id.amenities.infant === true
                        ? "amenity-icon-enabled"
                        : "amenity-icon-disabled"
                    }
                  >
                    <ChildFriendlyRoundedIcon />
                  </div>

                  <div
                    className={
                      id.amenities.infant === true
                        ? "amenity-type-enabled text"
                        : "amenity-type-disabled text"
                    }
                  >
                    Infant Friendly
                  </div>
                </div>
              </div>
            </div>

            <strong>
              <button
                className="more-amenities"
                onClick={() => {
                  setShowAmenities(true);
                }}
              >
                Show all Amenities
              </button>
            </strong>
          </div>

          <div className="pet-arrangements">
            <h3>Pet arrangements</h3>
            <div
              className={showspa ? "pet-sitter-disabled" : "pet-sitter-enabled"}
            >
              <h4>{id.sitter_name}</h4>

              <div className="picture">
                <SimpleImageSlider
                  width={796}
                  height={404}
                  images={id.sitter_images}
                />
              </div>
              <div
                className="contact-sitter"
                onClick={() => setshowsittercontact(true)}
              >
                Show contact
              </div>

              <div className="sitter-description">{id.sitter_description}</div>
              <div className="sitter-ratings">
                <div className="sitter-rating-bar">
                  Care
                  <Ratingbar value={id.sitter_care} />
                </div>

                <div className="sitter-rating-bar">
                  Value
                  <Ratingbar value={id.sitter_value} />
                </div>

                <div className="sitter-rating-bar">
                  Knowledge
                  <Ratingbar value={id.sitter_knowledge} />
                </div>
              </div>
            </div>
            <div className={showspa ? "pet-spa-enabled" : "pet-spa-disabled"}>
              <h4>{id.spa_name}</h4>

              <div className="picture">
                <SimpleImageSlider
                  width={796}
                  height={404}
                  images={id.spa_images}
                />
              </div>
              <div className="spa-servives">
                {id.sap_services.map((point, index) => {
                  return (
                    <div className="spa-services-points" key={index}>
                      - {point}
                    </div>
                  );
                })}
              </div>

              <div
                className="contact-sitter"
                onClick={() => setshowspacontact(true)}
              >
                Show contact
              </div>

              <div className="spa-ratings">
                <div className="spa-rating-bar">
                  Care
                  <Ratingbar value={id.spa_care} />
                </div>

                <div className="spa=rating-bar">
                  Value
                  <Ratingbar value={id.spa_value} />
                </div>

                <div className="spa-rating-bar">
                  Quality
                  <Ratingbar value={id.spa_quality} />
                </div>
              </div>
            </div>
            <div
              className="pet-arrangements-button"
              onClick={() => {
                setshowspa(!showspa);
              }}
            >
              {" "}
              See a {showspa ? "sitter" : "spa"} instead{" "}
            </div>
          </div>

          <div className="hotel-location-div">
            <h3>Location</h3>
            <div className="map"> </div>
            <div className="map-description">
              <div className={!showMoremap ? "map-showmore" : "map-showless"}>
                {id.map_description_short}
              </div>

              <div
                id="map-showmore"
                onClick={() => {
                  if (!showMoremap) {
                    setShowMoremap(true);
                  } else {
                    setShowMoremap(false);
                  }
                }}
              >
                {showMoremap ? "⬇ More" : "⬆ Less"}
              </div>

              <div className={showMoremap ? "map-showmore" : "map-showless"}>
                {id.map_description_short}
                <h5> Getting Around </h5>
                {id.map_description_getting_around}
              </div>
            </div>
          </div>

          <div className="reviews">
            <h3 className="overall-rating">
              <StarIcon className="star-review" />
              <span>
                {id.ratings} ({id.ratings_no} reviews)
              </span>
            </h3>
            <br />
            <div className="rating-wrapper">
              <div className="rating-left">
                <div className="rating-bar">
                  Cleanliness
                  <Ratingbar value={id.rating_cleanliness} />
                </div>

                <div className="rating-bar">
                  Communication
                  <Ratingbar value={id.rating_communication} />
                </div>

                <div className="rating-bar">
                  Check-in
                  <Ratingbar value={id.rating_checkin} />
                </div>
              </div>

              <div className="rating-right">
                <div className="rating-bar">
                  Accuracy
                  <Ratingbar value={id.rating_accuracy} />
                </div>

                <div className="rating-bar">
                  Loaction
                  <Ratingbar value={id.rating_Loaction} />
                </div>

                <div className="rating-bar">
                  value
                  <Ratingbar value={id.rating_value} />
                </div>
              </div>
            </div>

            <div classname="review-panel">
              <h4> Reviews </h4>
              {id.reviews.map((review, index) => {
                if (index < no_of_reviews) {
                  return (
                    <div>
                      <div className="review-description" key={index}>
                        <strong>
                          <h5>{review.name}</h5>
                        </strong>
                        <h6 className="review-dated">{review.dated}</h6>
                        <p>{review.review}</p>
                      </div>

                      <br />
                    </div>
                  );
                }
              })}
              <br />
            </div>

            <div
              className={
                no_of_reviews < id.ratings_no
                  ? "review-buttons-enabled"
                  : "review-buttons-disabled"
              }
              onClick={() => {
                if (no_of_reviews < id.ratings_no) {
                  setno_of_reviews(no_of_reviews + 5);
                }
              }}
            >
              more
            </div>
          </div>
        </div>
        <div
          className="rightpane"
          onClick={() => {
            if (showguests) setshowguests(false);
          }}
        >
          <div
            className="checkout-card"
            onClick={() => {
              if (showguests) setshowguests(false);
            }}
          >
            <div className="checkout-title">
              <strong className="price">
                &#8377;{Number(id.ppn) + Number(id.service_fee)}
              </strong>
              /Night
            </div>

            <div className="hotel-check-in-out">
              <div className="dates">
                <div className="hotel-Check-in">
                  <p>Check In</p>
                  <DatePicker date={new Date()}></DatePicker>
                </div>
                <div className="hotel-Check-out">
                  <p>Check Out</p>
                  <DatePicker date={new Date()}></DatePicker>
                </div>
              </div>
              <div
                className="hotel-Guest-count"
                onClick={() => {
                  setshowguests(!showguests);
                }}
              >
                <p>Guests</p>
                <span className="add-guest-span">
                  {showguests ? "Clear" : "Add guests"}
                </span>
              </div>
            </div>

            <div>
              {showguests ? (
                <div className="hotel-guest-menu">
                  <div className="hotel-guest-menu-adult">
                    <p>Adults</p>
                    <div className="number-icon">
                      {(adultNumber !== 0 &&
                        !(
                          (childernNumber >= 1 || infantNumber >= 1) &&
                          adultNumber === 1
                        )) ||
                      (adultNumber >= 1 &&
                        infantNumber === 0 &&
                        childernNumber === 0) ? (
                        <div className="Sub-icon">
                          <SubIcon
                            onClick={() => {
                              setAdultNumber((prevState) => {
                                return prevState - 1;
                              });
                            }}
                          ></SubIcon>
                        </div>
                      ) : null}
                      <p>{adultNumber}</p>
                      <div className="plus-icon">
                        <AddIcon
                          onClick={() => {
                            setAdultNumber((prevState) => {
                              return prevState + 1;
                            });
                          }}
                        ></AddIcon>
                      </div>
                    </div>
                  </div>
                  <div className="hotel-guest-menu-childern">
                    <p>Childern</p>
                    <div className="number-icon">
                      {childernNumber >= 1 && adultNumber > 0 ? (
                        <div className="Sub-icon">
                          <SubIcon
                            onClick={() => {
                              setChildernNumber((prevState) => {
                                return prevState - 1;
                              });
                            }}
                          ></SubIcon>
                        </div>
                      ) : null}
                      <p>{childernNumber}</p>

                      {childernNumber >= 0 && adultNumber >= 1 ? (
                        <div className="plus-icon">
                          <AddIcon
                            onClick={() => {
                              setChildernNumber((prevState) => {
                                return prevState + 1;
                              });
                            }}
                          ></AddIcon>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="hotel-guest-menu-infant">
                    <p>Infants</p>
                    <div className="number-icon">
                      {infantNumber >= 1 && adultNumber > 0 ? (
                        <div className="Sub-icon">
                          <SubIcon
                            onClick={() => {
                              setInfantNumber((prevState) => {
                                return prevState - 1;
                              });
                            }}
                          ></SubIcon>
                        </div>
                      ) : null}
                      <p>{infantNumber}</p>
                      {infantNumber >= 0 && adultNumber >= 1 ? (
                        <div className="plus-icon">
                          <AddIcon
                            onClick={() => {
                              setInfantNumber((prevState) => {
                                return prevState + 1;
                              });
                            }}
                          ></AddIcon>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="hotel-guest-menu-pet">
                    <p>Pets</p>
                    <div className="number-icon">
                      {petNumber >= 1 && adultNumber >= 0 ? (
                        <div className="Sub-icon">
                          <SubIcon
                            onClick={() => {
                              setPetNumber((prevState) => {
                                return prevState - 1;
                              });
                            }}
                          ></SubIcon>
                        </div>
                      ) : null}
                      <p>{petNumber}</p>
                      {petNumber >= 0 && adultNumber >= 0 ? (
                        <div className="plus-icon">
                          <AddIcon
                            onClick={() => {
                              setPetNumber((prevState) => {
                                return prevState + 1;
                              });
                            }}
                          ></AddIcon>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="pet-options">
              {petNumber ? (
                <div>
                  Spa {id.spa_cost}\hour: <Checkbox />
                  Sitter {id.sitter_cost}\hour: <Checkbox />
                </div>
              ) : null}
            </div>
            <div
              className="reserve"
              onClick={() => {
                if (isLoggedIn && adultNumber != 0) {
                  //Do something
                }
              }}
            >
              Reserve
            </div>
            <div className="reserve-message">
              <p> You wont be charged as yet </p>
            </div>
            <div className="cost">
              <p>
                {Number(id.ppn)} * {0} Night : {Number(id.ppn) * 0}
              </p>
              <p>Service fee : {id.service_fee}</p>
              <p>Other Charges : {id.taxes}</p>
              <p>Pet Charges (for 10 hours\day) : {Number(id.spa_cost) * 10}</p>
            </div>
            <div
              className="host-contact"
              onClick={() => {
                setshowhostcontact(true);
              }}
            >
              <p>Contact Host</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          showAmenities ? "all-amenities-enabled" : "all-amenities-disabled"
        }
      >
        <div className="all-amenities">
          <div
            className="close-amenities"
            onClick={() => {
              setShowAmenities(false);
            }}
          >
            <HighlightOffSharpIcon />
          </div>
          <h4>Amenities</h4>
          <h5 className="full-amenities-subtitle">Basic</h5>
          {id.amenities_basic.map((value, index) => {
            return (
              <div className="full-Amenities" key={index}>
                {value}
              </div>
            );
          })}
          <h5 className="full-amenities-subtitle">Facilities</h5>
          {id.amenities_facilities.map((value, index) => {
            return (
              <div className="full-Amenities" key={index}>
                {value}
              </div>
            );
          })}
          <h5 className="full-amenities-subtitle">Dining</h5>
          {id.amenities_dining.map((value, index) => {
            return (
              <div className="full-Amenities" key={index}>
                {value}
              </div>
            );
          })}
          <h5 className="full-amenities-subtitle">Dining</h5>
          {id.amenities_dining.map((value, index) => {
            return (
              <div className="full-Amenities" key={index}>
                {value}
              </div>
            );
          })}
          <h5 className="full-amenities-subtitle">Bed and Bath</h5>
          {id.amenities_bb.map((value, index) => {
            return (
              <div className="full-Amenities" key={index}>
                {value}
              </div>
            );
          })}
          <h5 className="full-amenities-subtitle">Safety</h5>
          {id.amenities_safety.map((value, index) => {
            return (
              <div className="full-Amenities" key={index}>
                {value}
              </div>
            );
          })}
          <h5 className="full-amenities-subtitle">Not included</h5>
          {id.amenities_notincluded.map((value, index) => {
            return (
              <div className="full-Amenities-disabled" key={index}>
                {value}
              </div>
            );
          })}
        </div>
      </div>
      <Modal
        visible={showsittercontact}
        width="400"
        height="300"
        effect="fadeInUp"
        className="popup"
        onClickAway={() => setshowsittercontact(false)}
      >
        <div className="popup">
          <div
            className="close-amenities"
            onClick={() => {
              setshowsittercontact(false);
            }}
          >
            <HighlightOffSharpIcon />
          </div>
          <h1>Email</h1>
          <p>{id.sitter_mail}</p>
          <h1>Phone</h1>
          <p>{id.sitter_phone}</p>
        </div>
      </Modal>

      <Modal
        visible={showspacontact}
        width="400"
        height="300"
        effect="fadeInUp"
        onClickAway={() => setshowspacontact(false)}
      >
        <div className="popup">
          <div
            className="close-amenities"
            onClick={() => {
              setshowspacontact(false);
            }}
          >
            <HighlightOffSharpIcon />
          </div>
          <h1>Email</h1>
          <p>{id.spa_mail}</p>
          <h1>Phone</h1>
          <p>{id.spa_phone}</p>
        </div>
      </Modal>

      <Modal
        visible={showhostcontact}
        width="400"
        height="300"
        effect="fadeInUp"
        onClickAway={() => setshowhostcontact(false)}
      >
        <div className="popup">
          <div
            className="close-amenities"
            onClick={() => {
              setshowhostcontact(false);
            }}
          >
            <HighlightOffSharpIcon />
          </div>
          <h1>Email</h1>
          <p>{id.host_mail}</p>
          <h1>Phone</h1>
          <p>{id.host_phone}</p>
        </div>
      </Modal>
    </div>
  );
}

export default Hotel;