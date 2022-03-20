import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useMoralisWeb3Api, useMoralis } from "react-moralis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";

const MarketPlace = () => {
  // const apiKey = "ABLHCAJlwSqdPwoxl5y7B4RqtHO1IhYKFxtYq0pe";
  //const serverUrl = "https://cnbqsahhry4m.usemoralis.com:2053/server";
  const Web3Api = useMoralisWeb3Api();

  const [Nfts, getNfts] = useState();

  const fetchAllNFTS = async () => {
    const options = {
      address: "0xa4A23A155a8B8B87eF66c5b620B5253899c0A31e",
      chain: "bsc testnet",
    };
    const nftOwners = await Web3Api.token.getNFTOwners(options);
    console.log(nftOwners);
  };

  return (
    <div className="container ">
      <div className="px-lg-5">
        <div className="row pt-5">
          {/*    <Button className="mt-5" onClick={fetchAllNFTS}>
            Start Mint
          </Button> */}
          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm card-color2">
              <img
                src="https://i.guim.co.uk/img/media/c5e73ed8e8325d7e79babf8f1ebbd9adc0d95409/2_5_1754_1053/master/1754.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=065f279099ded1062688e357b155dc29"
                alt=""
                className="card-img-top img-fluid "
              />

              <div className="p-2">
                <h5>
                  {" "}
                  <span className="fw-bold">Name</span>
                </h5>
                <p className="small text-muted mb-0 lh-1  text-truncate">
                  Description is trucated for better view and the cards doesn't
                  resize
                </p>
                <div className="d-flex align-items-center justify-content-between px-1 py-2 mt-1">
                  <p className="small mb-0">
                    <span>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCircleDollarToSlot}
                        size="xl"
                        color="#151D3B"
                      ></FontAwesomeIcon>{" "}
                    </span>
                    <span className="font-weight-bold text-muted">
                      0.25 BNB
                    </span>
                  </p>
                  <div>
                    <FontAwesomeIcon
                      icon={faHeart}
                      color="#D82148"
                      size="xl"
                    ></FontAwesomeIcon>{" "}
                    <span>4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm card-color2">
              <img
                src="https://www.webbox.co.uk/wp-content/uploads/2020/10/angry_cat_2-scaled.jpg"
                alt=""
                className="card-img-top img-fluid "
              />

              <div className="p-2">
                <h5>
                  {" "}
                  <span className="fw-bold">Name</span>
                </h5>
                <p className="small text-muted mb-0 lh-1  text-truncate">
                  Description is trucated for better view and the cards doesn't
                  resize
                </p>
                <div className="d-flex align-items-center justify-content-between px-1 py-2 mt-1">
                  <p className="small mb-0">
                    <span>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCircleDollarToSlot}
                        size="xl"
                        color="#151D3B"
                      ></FontAwesomeIcon>{" "}
                    </span>
                    <span className="font-weight-bold text-muted">
                      0.25 BNB
                    </span>
                  </p>
                  <div>
                    <FontAwesomeIcon
                      icon={faHeart}
                      color="#D82148"
                      size="xl"
                    ></FontAwesomeIcon>{" "}
                    <span>4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm card-color2">
              <img
                src="https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2014/07/cat81.jpg?w=607&h=607&crop=1&ssl=1"
                alt=""
                className="card-img-top img-fluid "
              />

              <div className="p-2">
                <h5>
                  {" "}
                  <span className="fw-bold">Name</span>
                </h5>
                <p className="small text-muted mb-0 lh-1  text-truncate">
                  Description is trucated for better view and the cards doesn't
                  resize
                </p>
                <div className="d-flex align-items-center justify-content-between px-1 py-2 mt-1">
                  <p className="small mb-0">
                    <span>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCircleDollarToSlot}
                        size="xl"
                        color="#151D3B"
                      ></FontAwesomeIcon>{" "}
                    </span>
                    <span className="font-weight-bold text-muted">
                      0.25 BNB
                    </span>
                  </p>
                  <div>
                    <FontAwesomeIcon
                      icon={faHeart}
                      color="#D82148"
                      size="xl"
                    ></FontAwesomeIcon>{" "}
                    <span>4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm card-color2">
              <img
                src="https://media.gettyimages.com/photos/cat-sandwich-picture-id146582583?s=612x612"
                alt=""
                className="card-img-top img-fluid "
              />

              <div className="p-2">
                <h5>
                  {" "}
                  <span className="fw-bold">Name</span>
                </h5>
                <p className="small text-muted mb-0 lh-1  text-truncate">
                  Description is trucated for better view and the cards doesn't
                  resize
                </p>
                <div className="d-flex align-items-center justify-content-between px-1 py-2 mt-1">
                  <p className="small mb-0">
                    <span>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCircleDollarToSlot}
                        size="xl"
                        color="#151D3B"
                      ></FontAwesomeIcon>{" "}
                    </span>
                    <span className="font-weight-bold text-muted">
                      0.25 BNB
                    </span>
                  </p>
                  <div>
                    <FontAwesomeIcon
                      icon={faHeart}
                      color="#D82148"
                      size="xl"
                    ></FontAwesomeIcon>{" "}
                    <span>4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm card-color2">
              <img
                src="https://media.istockphoto.com/photos/cat-on-glass-bottom-view-picture-id1171983473?k=20&m=1171983473&s=612x612&w=0&h=BQV-f1L5VNVIhLF2iPq-iOxnIuCNX8QynuchBdDY0qQ="
                alt=""
                className="card-img-top img-fluid "
              />

              <div className="p-2">
                <h5>
                  {" "}
                  <span className="fw-bold">Name</span>
                </h5>
                <p className="small text-muted mb-0 lh-1  text-truncate">
                  Description is trucated for better view and the cards doesn't
                  resize
                </p>
                <div className="d-flex align-items-center justify-content-between px-1 py-2 mt-1">
                  <p className="small mb-0">
                    <span>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCircleDollarToSlot}
                        size="xl"
                        color="#151D3B"
                      ></FontAwesomeIcon>{" "}
                    </span>
                    <span className="font-weight-bold text-muted">
                      0.25 BNB
                    </span>
                  </p>
                  <div>
                    <FontAwesomeIcon
                      icon={faHeart}
                      color="#D82148"
                      size="xl"
                    ></FontAwesomeIcon>{" "}
                    <span>4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm card-color2">
              <img
                src="https://www.rover.com/blog/wp-content/uploads/2019/12/Funny-cat-sitting-up.jpg"
                alt=""
                className="card-img-top img-fluid "
              />

              <div className="p-2">
                <h5>
                  {" "}
                  <span className="fw-bold">Name</span>
                </h5>
                <p className="small text-muted mb-0 lh-1  text-truncate">
                  Description is trucated for better view and the cards doesn't
                  resize
                </p>
                <div className="d-flex align-items-center justify-content-between px-1 py-2 mt-1">
                  <p className="small mb-0">
                    <span>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCircleDollarToSlot}
                        size="xl"
                        color="#151D3B"
                      ></FontAwesomeIcon>{" "}
                    </span>
                    <span className="font-weight-bold text-muted">
                      0.25 BNB
                    </span>
                  </p>
                  <div>
                    <FontAwesomeIcon
                      icon={faHeart}
                      color="#D82148"
                      size="xl"
                    ></FontAwesomeIcon>{" "}
                    <span>4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm card-color2">
              <img
                src="https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1202731508.jpg"
                alt=""
                className="card-img-top img-fluid "
              />

              <div className="p-2">
                <h5>
                  {" "}
                  <span className="fw-bold">Name</span>
                </h5>
                <p className="small text-muted mb-0 lh-1  text-truncate">
                  Description is trucated for better view and the cards doesn't
                  resize
                </p>
                <div className="d-flex align-items-center justify-content-between px-1 py-2 mt-1">
                  <p className="small mb-0">
                    <span>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCircleDollarToSlot}
                        size="xl"
                        color="#151D3B"
                      ></FontAwesomeIcon>{" "}
                    </span>
                    <span className="font-weight-bold text-muted">
                      0.25 BNB
                    </span>
                  </p>
                  <div>
                    <FontAwesomeIcon
                      icon={faHeart}
                      color="#D82148"
                      size="xl"
                    ></FontAwesomeIcon>{" "}
                    <span>4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm card-color2">
              <img
                src="https://www.womansworld.com/wp-content/uploads/2019/07/funny-cat-tongue.jpg?w=750"
                alt=""
                className="card-img-top img-fluid "
              />

              <div className="p-2">
                <h5>
                  {" "}
                  <span className="fw-bold">Name</span>
                </h5>
                <p className="small text-muted mb-0 lh-1  text-truncate">
                  Description is trucated for better view and the cards doesn't
                  resize
                </p>
                <div className="d-flex align-items-center justify-content-between px-1 py-2 mt-1">
                  <p className="small mb-0">
                    <span>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCircleDollarToSlot}
                        size="xl"
                        color="#151D3B"
                      ></FontAwesomeIcon>{" "}
                    </span>
                    <span className="font-weight-bold text-muted">
                      0.25 BNB
                    </span>
                  </p>
                  <div>
                    <FontAwesomeIcon
                      icon={faHeart}
                      color="#D82148"
                      size="xl"
                    ></FontAwesomeIcon>{" "}
                    <span>4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
