import {EmptyFn, RenderFn} from 'components/shared/type/event.type';

export interface CardSideProps {
  onFlip: EmptyFn;
}

export interface CardProps {
  renderFront: RenderFn<CardSideProps>;
  renderBack: RenderFn<CardSideProps>;
}
