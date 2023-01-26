export interface ICarProps {
  thumbnailSrc: string;
  name: string;
  mileage: string;
  gearType: string;
  dailyPrice: number;
  monthlyPrice: number;
  gas: string;
}

export interface IButtonProps {
  theme?: 'filled' | 'outlined';
  text: string;
  className?: string;
}

export interface ILogoProps {
  color?: 'white' | 'dark';
  bgColor?: 'white' | 'dark';
}

export interface IMarginerProps {
  margin: number | string;
  direction?: 'horizontal' | 'vertical';
}
