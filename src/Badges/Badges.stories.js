import React from 'react';
import Badges from './Badges';
import { StyledBadgesComponent } from './Badges.Styled';

export default {
  title: 'Badges',
  component: Badges,
};

export const CartBadges = () => (
  <div>
    <StyledBadgesComponent>
      <Badges
        size="small"
        type="cart"
        img="https://adorn-components.netlify.app/assets/images/cart.svg"
        count={10}
      />
      <Badges
        size="medium"
        type="cart"
        img="https://adorn-components.netlify.app/assets/images/cart.svg"
        count={12}
      />
      <Badges
        size="large"
        type="cart"
        img="https://adorn-components.netlify.app/assets/images/cart.svg"
        count={15}
      />
    </StyledBadgesComponent>
  </div>
);

export const ImageBadges = () => (
  <div>
    <StyledBadgesComponent>
      <Badges
        size="small"
        type="default"
        color="primary"
        img="https://i.pravatar.cc/62"
      />
      <Badges
        size="medium"
        type="default"
        color="warning"
        img="https://i.pravatar.cc/61"
      />
      <Badges
        size="large"
        type="default"
        color="success"
        img="https://i.pravatar.cc/60"
      />
    </StyledBadgesComponent>
  </div>
);