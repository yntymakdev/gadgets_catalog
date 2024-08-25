import cn from 'classnames';
import s from './PriceInfo.module.scss';

type Props = {
  isHotPrice: boolean;
  price: number;
  fullPrice: number;
  fontSize: string;
};

export const PriceInfo: React.FC<Props> = ({ isHotPrice, price, fullPrice, fontSize }) => {
  return (
    <div className={s.priceInfo}>
      <p
        style={{
          fontSize: fontSize,
        }}
        className={s.price}>
        ${isHotPrice ? price : fullPrice}
      </p>

      {isHotPrice && <p className={cn(s.price, s['price--active'])}>${fullPrice}</p>}
    </div>
  );
};
