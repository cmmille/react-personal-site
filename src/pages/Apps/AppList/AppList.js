import AppCard from "./AppCard/AppCard";
import Container from "../../../components/layout/Container/Container";

import foodAppImage from "../../../assets/images/link-previews/react-fooce.png"

const AppList = () => {
  return (
    <Container>
      <AppCard
        title="Food order app"
        description="DoorDash clone build using React"
        image={foodAppImage}
        link="https://apps.clockfeld.com/react-food-order-app"
      />
    </Container>
  );
};
export default AppList;
