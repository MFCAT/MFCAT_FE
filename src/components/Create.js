import Moralis from "moralis";
import React, { useState, useRef } from "react";
import { Card, Button, Form, Spinner } from "react-bootstrap";
import { useMoralis } from "react-moralis";
import tokenContractAbi from "../components/abi";
import Chains from "./Chains";
import defaultimage from "../images/default_image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUpload } from "@fortawesome/free-solid-svg-icons";

//import Chains from "../components/Chains";
//import { useForm } from "react-hook-form";

const TOKEN_CONTRACT_ADDRESS = "0xa4A23A155a8B8B87eF66c5b620B5253899c0A31e"; //BSC TESTNET NETWORK

//"0x269Cd7Ea6F52aB43bb282A809BcD29Dd62773C52";
const Upload = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const ref = useRef();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const descChangeHandler = (event) => {
    setDesc(event.target.value);
  };

  const fileChangeHandler = (event) => {
    setFile(event.target.files[0]);
  };

  const submitHandler = async (event) => {
    setLoading(true);
    event.preventDefault();
    const nftFile = new Moralis.File(file.name, file);
    await nftFile.saveIPFS();
    const nftFilePath = nftFile.ipfs();
    const nftFileHash = nftFile.hash();
    const metadata = {
      name: name,
      description: desc,
      image: nftFilePath,
    };

    //console.log(metadata);

    const nftFileMetadataFile = new Moralis.File("metadata.json", {
      base64: btoa(JSON.stringify(metadata)),
    });

    await nftFileMetadataFile.saveIPFS();

    const nftFileMetadataFilePath = nftFileMetadataFile.ipfs();
    const nftFileMetadataFileHash = nftFileMetadataFile.hash();

    const nftId = await mint(nftFileMetadataFilePath);

    const Item = Moralis.Object.extend("Item");
    const item = new Item();
    item.set("name", name);
    item.set("description", desc);
    item.set("nftFilePath", nftFilePath);
    item.set("nftFileHash", nftFileHash);
    item.set("MetadataFilePath", nftFileMetadataFilePath);
    item.set("MetadataFileHash", nftFileMetadataFileHash);
    item.set("nftId", nftId);
    item.set("nftContractAddress", TOKEN_CONTRACT_ADDRESS);
    await item.save();

    setName("");
    setDesc("");
    ref.current.value = "";
    setLoading(false);
  };

  const mint = async (metadataUrl) => {
    let web3 = await Moralis.enableWeb3();
    const contract = new web3.eth.Contract(
      tokenContractAbi,
      TOKEN_CONTRACT_ADDRESS
    );

    console.log(web3.currentProvider.selectedAddress);

    const receipt = await contract.methods
      .createItem(metadataUrl)
      .send({ from: web3.currentProvider.selectedAddress });
    console.log(receipt);
    return receipt.events.Transfer.returnValues.tokenId;
  };

  console.log(isLoading);

  // d-flex flex-column min-vh-100 justify-content-center align-items-center
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <Card className="m-1 p-5 card-color mt-5">
            <Card.Title className=""> Start to mint your F* Cat! </Card.Title>
            <Card.Body>
              {!file && (
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-2">
                    <img src={defaultimage} width="200px" />
                  </div>
                  <div className="col-md-3"></div>
                </div>
              )}
              {file && (
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-2">
                    <img src={URL.createObjectURL(file)} width="200px" />
                  </div>
                  <div className="col-md-3"></div>
                </div>
              )}
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3">
                  <Form.Label></Form.Label>

                  <Form.Control
                    required
                    type="file"
                    accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                    ref={ref}
                    onChange={fileChangeHandler}
                  />
                  <Form.Text className="text-muted">
                    File types supported: JPG, PNG, JPEG, GIF, BMP, TIF{" "}
                    <p>Max file size: 100 MB</p>
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 ">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={name}
                    onChange={nameChangeHandler}
                  />
                  <Form.Text className="text-muted">
                    Give your f* cat a name.
                  </Form.Text>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={desc}
                    onChange={descChangeHandler}
                  />
                  <Form.Text className="text-muted">
                    Describe your f* cat.
                  </Form.Text>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <div className="row">
                  {isAuthenticated && !isLoading ? (
                    <Button className="mt-5" variant="cat" type="submit">
                      <FontAwesomeIcon
                        icon={faCloudUpload}
                        size="xl"
                        color="white"
                      ></FontAwesomeIcon>{" "}
                      Let's Go!
                    </Button>
                  ) : (
                    <Button
                      className="mt-5"
                      variant="cat"
                      disabled
                      type="submit"
                    >
                      <Spinner animation="grow" />
                    </Button>
                  )}
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3"></div>
        <div></div>
      </div>
    </div>
  );
};

export default Upload;
