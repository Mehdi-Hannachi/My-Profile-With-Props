// const Adress = (props) => {
//   console.log(props);
//   console.log(props.adress);
const Adress = ({ adress }) => {
  //   console.log(adress);

  return (
    <>
      <h1> My Adress : {adress} </h1>
      {/* <h1> My Adress : {props.adress} </h1> */}
    </>
  );
};

export default Adress;
