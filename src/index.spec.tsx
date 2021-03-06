import React from "react";
import { shallow } from "enzyme";
import MyComponent from ".";

describe("<Anchor/>", () => {
  it("renders", () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(MyComponent).length).toBe(1);
  });
});
