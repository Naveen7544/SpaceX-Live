import React, { useEffect, useState } from "react";
import CustomModal from "../components/CustomModal";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Rockets() {
  let navigate = useHistory();
  const [data, setData] = useState(null);
  const [dataToSend, setDataToSend] = useState("Hello from Parent!");
  const [isModalOpen, setModalOpen] = useState(false);

  console.log("checkrocketdataa111", dataToSend);

  const getRocketDetails = () => {
    axios
      .get("https://api.spacexdata.com/v4/rockets")
      .then((response) => {
        // console.log("checkrocketdataa",response.data)
        // setData(response.data?.[1]?.flickr_images?.[1]);

        let getRocketData = response.data
          .slice(1)
          .filter((item) => item.flickr_images);

        setData(getRocketData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getRocketDetails();
  }, []);

  //   const handleClick = () => {
  //     // Update the dataToSend state or fetch data dynamically
  //     setDataToSend(data);
  //     setModalOpen(true);
  //   };

  //   const sendData= (data)=>{
  //     navigate(`CustomModal`, {
  //         state: { id: data},
  //       });
  //   }

  const handleOpenModal = (array) => {
    console.log("checkaaray", array);
    setDataToSend(array);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="rockets-background">
      <div>
        <CustomModal
          rocketsDetails={dataToSend}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
      <img
        className="img-background"
        src="https://live.staticflickr.com/7706/26751237322_5a52540ea3_h.jpg"
        alt="Background Image"
      />
      <div className="rocket-container">
        <div className="rocket-header">
          <h3 className="rocket-title">Falcon 9</h3>
        
          <div className="image-wrap">
          <div className="rocket-status">
            <h1>STATUS</h1>
            <h4>Active</h4>
          </div>
            <img
            className="box-img"
            src={data?.[0]?.flickr_images[1]}
            alt="Image 0"
            onClick={() => handleOpenModal(data?.[0])}
          />
          </div>
          
        </div>

        <div className="rocket-header">
          <h3 className="rocket-title">Falcon Heavy</h3>
          <div className="image-wrap">
          <div className="rocket-status">
            <h1>STATUS</h1>
            <h4>Active</h4>
          </div>
          <img
            className="box-img"
            src={data?.[1]?.flickr_images[1]}
            alt="Image 1"
            onClick={() => handleOpenModal(data?.[1])}
          />
          </div>
        </div>
        <div className="rocket-header">
          <h3 className="rocket-title">Starship</h3>
          <div className="image-wrap">
          <div className="rocket-status-2">
            <h1>STATUS</h1>
            <h4>in development</h4>
          </div>
          <img
            className="box-img"
            src={data?.[2]?.flickr_images[1]}
            alt="Image 2"
            onClick={() => handleOpenModal(data?.[2])}
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rockets;
