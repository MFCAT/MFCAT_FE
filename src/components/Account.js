import React from "react";

import { useMoralis, useNFTBalances } from "react-moralis";
import { useVerifyMetadata } from "../hooks/useVerifyMetadata";
import { getExplorer } from "../helpers/networks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";

const Account = () => {
  const { data: NFTBalances } = useNFTBalances();
  const { verifyMetadata } = useVerifyMetadata();

  console.log("NFTBalances", NFTBalances);
  return (
    <div className="container ">
      <div className="px-lg-5">
        <div className="row pt-5">
          {NFTBalances?.result &&
            NFTBalances.result.map((nft, index) => {
              //Verify Metadata
              nft = verifyMetadata(nft);
              console.log(nft);
              return (
                <div className="col-xl-3 col-lg-4 col-md-6 mb-4 ">
                  <div className="bg-white rounded shadow-sm card-color2">
                    <img
                      src={nft?.image || "error"}
                      alt=""
                      className="card-img-top img-fluid "
                    />
                    <div className="p-2 ">
                      <h5>
                        {" "}
                        <span className="fw-bold">{nft?.metadata?.name}</span>
                      </h5>
                      <p className="small text-muted mb-0 lh-1  text-truncate ">
                        {nft?.metadata?.description}
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
                          <span>1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Account;
