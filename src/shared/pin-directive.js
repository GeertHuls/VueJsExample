export default {
  bind: (element, binding) => {
    if (binding.arg !== 'position') {
      return;
    }
    Object.keys(binding.modifiers).forEach((key) => {
      console.log(key);
      element.style[key] = '5px';
    });
    element.style.position = 'absolute';
  },
};
