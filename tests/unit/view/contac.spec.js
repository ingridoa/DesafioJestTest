import { mount } from "@vue/test-utils";
// import ContactView from "@/views/ContactView.vue";
import ContactView from "@/views/ContactView.vue";

describe("Test de vista About", () => {
  it("Match de snapshot con ContactView.vue", () => {
    /* Seleccionar el componente que será puesto a prueba */
    const wrapper = mount(ContactView);
    /* Assertion => Aserción */
    expect(wrapper.html()).toMatchSnapshot();
  });
});

