import { shallow } from "enzyme";
import HomeClassComponent from ".";

describe("Home Class Component", () => {
    it("should have at least 2 agendas", () => {
        let component = shallow(<HomeClassComponent />);
        // cara akses state dari component yang ingin ditest
        expect(component.state().agendas.length).toBe(2); // this.state
    });
});