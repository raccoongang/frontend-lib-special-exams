export const isEmpty = (obj) => {
    if (!obj) return true;
    return Object.keys(obj).length === 0;
};

export const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
