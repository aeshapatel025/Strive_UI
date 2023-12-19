import React from 'react';
import { FaSave } from 'react-icons/fa';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const listButton = () => (
  <div>
    <Button type="primary" variant="contained" text="Primary Button" />
    <Button type="secondary" variant="contained" text="Secondary Button" />
    <Button type="success" variant="contained" text="Success Button" />
    <Button type="warning" variant="contained" text="Warning Button" />
  </div>
);

export const OutlineButtons = () => (
  <div>
    <Button
      type="primary"
      variant="outlined"
      text="Primary Button"
      outline
      hovers
    />
    <Button
      type="secondary"
      variant="outlined"
      text="Secondary Button"
      outline
      hovers
    />
    <Button
      type="success"
      variant="outlined"
      text="Success Button"
      outline
      hovers
    />
    <Button
      type="warning"
      variant="outlined"
      text="Warning Button"
      outline
      hovers
    />
  </div>
);

export const TextButtons = () => (
  <div>
    <Button
      type="primary"
      variant="contained"
      text="Primary Link Button"
      border
      outline
    />
    <Button
      type="secondary"
      variant="contained"
      text="Secondary Link Button"
      border
      outline
    />
    <Button
      type="success"
      variant="contained"
      text="Success Link Button"
      border
      outline
    />
    <Button
      type="warning"
      variant="contained"
      text="Warning Link Button"
      border
      outline
    />
  </div>
);

export const IconButtons = () => (
  <div>
    <Button
      type="primary"
      variant="outlined"
      text="Save Button"
      outline
      hovers
      icon={<FaSave />}
    />
    <Button
      type="primary"
      variant="contained"
      text="Save Button"
      icon={<FaSave />}
    />
  </div>
);
