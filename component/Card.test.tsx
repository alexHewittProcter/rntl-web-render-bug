import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";

import Card from "./Card";

describe("Card test", () => {
  it("Should render correctly", () => {
    // const comp = render(<Card />);
    const comp = renderer.create(<Card />);

    expect(comp).toMatchSnapshot();
  });
});
