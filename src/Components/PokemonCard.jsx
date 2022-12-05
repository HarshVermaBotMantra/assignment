import { Button, Card, CardActions, CardMedia } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicModal from "./Modal";

const PokemonCard = (props) => {
  const { item } = props;
  const [id, setId] = useState("");
  const [types, setTypes] = useState([]);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (item.url) {
      const config = {
        method: "get",
        url: item?.url,
      };
      axios(config)
        .then((res) => {
          setData(res.data);
          setId(res.data.id);
          setImage(
            `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${res.data.id}.svg`
          );
          let types = res.data.types?.map((item) => item.type.name);

          setTypes(types);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);

  return (
    <>
      <Card
        sx={{
          minWidth: 250,
          margin: "5px",
          marginBottom: "12px",
        }}
        className="card-section"
      >
        <div className="card-title" style={{ textTransform: "capitalize" }}>
          {item?.name}
        </div>

        <div>
          <label htmlFor="">Id:&nbsp;</label>
          <span>{id}</span>
        </div>
        <div>
          <label htmlFor="">Types:&nbsp; </label>
          <span>{types.join(",")}</span>
        </div>
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt="green iguana"
          style={{ objectFit: "contain" }}
        />
        <CardActions>
          <Button
            variant="contained"
            size="small"
            onClick={() => setOpen(true)}
          >
            Open
          </Button>
        </CardActions>
      </Card>
      <PokemonModal
        open={open}
        setOpen={setOpen}
        id={id}
        image={image}
        name={item.name}
        data={data}
        types={types}
      />
    </>
  );
};

const PokemonModal = ({ open, setOpen, id, image, name, data, types }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <BasicModal open={open} handleClose={handleClose}>
        <div className="modal-wapper">
          <div className="header">{name}</div>
          <div className="pokemon-stats">
            <div>
              <img src={image} alt={image} height="200" />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <div className="content-header">Stats</div>
              <div>
                <div className="stat-content">
                  <div className="stat-lable">Id:&nbsp;</div>
                  <div>{id}</div>
                </div>
                <div className="stat-content">
                  <div className="stat-lable">Types:&nbsp;</div>
                  <div>{types.join(",")}</div>
                </div>
                <div className="stat-content">
                  <div className="stat-lable">Weight:&nbsp;</div>
                  <div>{data?.weight}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BasicModal>
    </>
  );
};

export default PokemonCard;
