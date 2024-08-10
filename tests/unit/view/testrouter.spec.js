import { shallowMount } from "@vue/test-utils";
import AboutView from "@/views/AboutView.vue";
import { createRouter, createWebHistory } from "vue-router";
import ContactView from "@/views/ContactView.vue";

describe("Tests de vista About", () => {
  it("Test2 - Probar la existencia del componente en la ruta", async () => {
    const routes = [
      {
        path: "/about",
        name: "about",
        component: AboutView,
      },
    ];
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes,
    });

    router.push("/about");
    await router.isReady();

    const wrapper = shallowMount(AboutView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(AboutView).exists()).toBe(true);
  });
});

describe("Tests de vista Home", () => {
  it("Test2 - Probar la existencia del componente en la ruta", async () => {
    const routes = [
      {
        path: "/contacto",
        name: "contacto",
        component: ContactView,
      },
    ];
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes,
    });

    router.push("/");
    await router.isReady();

    const wrapper = shallowMount(ContactView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(ContactView).exists()).toBe(true);
  });
});