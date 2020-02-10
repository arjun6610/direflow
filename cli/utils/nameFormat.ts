import to from 'to-case';
import INames from '../interfaces/INames';

export const getNameFormats = (name: string): INames => {
  return {
    title: to.title(name),
    pascal: to.pascal(name),
    snake: to.slug(name),
  };
};

export const createDefaultName = (name: string) => {
  const snakeName = to.slug(name);

  if (!snakeName.includes('-')) {
    return `${snakeName}-component`;
  }

  return snakeName;
};