# Button

This is the documentation page for the awesome `<Button />` component.

## Usage

```vue{3}
<template>
  <Button
    :type="'outlined'"
    :size="'sm'"
  >
     My Button
  </Button>
</template>
```

## Example

<script setup>
  import Button from './Button.vue';
</script>

### Types
<div class="flex flex-row gap-2">
    <Button>Default</Button>
    <Button type="outlined">Outlined</Button>
    <Button type="text">Text</Button>
</div>

### Icons
##### Right
<div class="flex flex-row gap-2">
    <Button icon="notifications-without-bubble">Default</Button>
    <Button type="outlined" icon="notifications-without-bubble">Outlined</Button>
    <Button type="text" icon="notifications-without-bubble">Text</Button>
</div>

##### Left
<div class="flex flex-row gap-2">
    <Button icon="notifications-without-bubble" icon-pos="left">Default</Button>
    <Button type="outlined" icon="notifications-without-bubble" icon-pos="left">Outlined</Button>
    <Button type="text" icon="notifications-without-bubble" icon-pos="left">Text</Button>
</div>

##### Disabled
<div class="flex flex-row gap-2">
    <Button icon="notifications-without-bubble" disabled>Default</Button>
    <Button type="outlined" icon="notifications-without-bubble" disabled>Outlined</Button>
    <Button type="text" icon="notifications-without-bubble" disabled>Text</Button>
</div>

### Sizes
<div class="flex flex-row gap-2">
    <Button size="sm">Small</Button>&nbsp;
    <Button size="md">Medium</Button>&nbsp;
    <Button size="lg">Large</Button>
</div>

### Disabled
<div class="flex flex-row gap-2">
    <Button disabled>Default</Button>&nbsp;
    <Button type="outlined" disabled>Outlined</Button>&nbsp;
    <Button type="text" disabled>Text</Button>
</div>

## API
API defines helper props, events and others for the Button module.
### Props
Defines valid properties in Button component.

| Name | Type                            | Default   | Description |
|------|---------------------------------|-----------|-------------|
| type | "default" / "outlined" / "text" | "default" | Title       |
| size | "sm" / "md" / "lg"              | "sm"      | Text        |
