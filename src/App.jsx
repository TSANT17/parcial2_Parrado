import { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import { setPhotos as setPhotosActions } from "./actions";

import { useFetch } from "./hooks/useFetch";
import { PhotosList } from "./components/PhotosList";
function App({ setPhotos, photos }) {
  useEffect(() => {
    const fetchData = async () => {
      const result = await useFetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setPhotos(result);
    };
    fetchData();
  });
  return (
    <>
      <h1>Photos</h1>
      <PhotosList photos={photos} />
    </>
  );
}
const mapStateToProps = (state) => ({
  photos: state.photos,
});
const mapDispatchToProps = (dispatch) => ({
  setPhotos: (value) => dispatch(setPhotosActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
