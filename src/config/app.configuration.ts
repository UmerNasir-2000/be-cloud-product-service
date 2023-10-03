export enum ConfigKeys {
  PRODUCT_TABLE_NAME = 'PRODUCT_TABLE_NAME',
}

export default () => {
  const map: { [key: string]: string } = {};

  Object.keys(ConfigKeys).forEach((key) => {
    map[key] = process.env?.key ?? '';
  });

  return map;
};
