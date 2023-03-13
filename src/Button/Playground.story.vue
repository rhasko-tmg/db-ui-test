<script lang="ts">
import type { PageMeta } from '@vitebook/client';

export const __pageMeta: PageMeta = {
  title: 'Button',
  description: 'My awesome button.',
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue'

import {
  ControlsAddon,
  EventsAddon,
  eventCallback,
} from '@vitebook/vue/addons';

import { Variant } from '@vitebook/vue';

import Button from './Button.vue';

import type { BUTTON_TYPE as ButtonType, SIZE_TYPE as SizeType } from '../shared/emums';
import { BUTTON_TYPE, SIZE_TYPE } from '../shared/emums';

const title = ref('Click Me');
const disabled: Ref<boolean> = ref(false);
const buttonType: Ref<ButtonType> = ref(BUTTON_TYPE.DEFAULT);
const sizeType: Ref<SizeType> = ref(SIZE_TYPE.MD);
const enableIcon: Ref<Boolean> = ref(false);
const icon: Ref<String> = ref('notifications-without-bubble');
const iconPosition: Ref<String> = ref('right');

function onEnterDisabledButton() {
  disabled.value = true;
}

function onExitDisabledButton() {
  disabled.value = false;
}

function setButtonType(type: BUTTON_TYPE) {
  buttonType.value = type;
}
</script>

<template>
  <Variant
    name="Default"
    description="The default button."
    @enter="setButtonType(BUTTON_TYPE.DEFAULT)"
  />

  <Variant
    name="Outlined"
    description="The outlined button."
    @enter="setButtonType(BUTTON_TYPE.OUTLINED)"
  />

  <Variant
    name="Text"
    description="The text button."
    @enter="setButtonType(BUTTON_TYPE.TEXT)"
  />

  <Button
    :type="buttonType"
    :size="sizeType"
    :disabled="disabled"
    :icon="enableIcon ? icon : ''"
    :icon-pos="iconPosition"
    @click="eventCallback"
  >
    {{ title }}
  </Button>

  <ControlsAddon>
    <div class="grid grid-cols-1 gap-6">
      <label class="block">
        <span class="mb-3 text-md font-bold">Button text</span>

        <input
          type="text"
          v-model="title"
          class="mt-2 block w-full rounded-md text-mine-shaft-800 border-gray-300 shadow-sm focus:border-scarlet-300 focus:ring focus:ring-scarlet-200 focus:ring-opacity-50"
        />
      </label>

      <label class="inline-flex items-center">
        <input
          type="checkbox"
          v-model="disabled"
          class="rounded p-2 border-gray-300 text-scarlet-600 shadow-sm focus:border-scarlet-300 focus:ring focus:ring-offset-0 focus:ring-scarlet-200 focus:ring-opacity-50"
        />
        <span class="text-gray-700 ml-2">Disabled</span>
      </label>

      <div>
        <h4 class="mb-3 text-md font-bold">Button Size</h4>

        <div class="grid grid-cols-3 gap-2 w-full max-w-screen-sm">
          <div>
            <input class="hidden peer" id="radio_size-sm" type="radio" name="radio" checked :value="SIZE_TYPE.SM" v-model="sizeType">
            <label class="flex flex-col p-2 cursor-pointer bg-secondary text-white font-bold text-center peer-checked:bg-primary" for="radio_size-sm">
              Small
            </label>
          </div>
          <div>
            <input class="hidden peer" id="radio_size-md" type="radio" name="radio" :value="SIZE_TYPE.MD" v-model="sizeType">
            <label class="flex flex-col p-2 cursor-pointer bg-secondary text-white font-bold text-center peer-checked:bg-primary" for="radio_size-md">
              Medium
            </label>
          </div>
          <div>
            <input class="hidden peer" id="radio_size-lg" type="radio" name="radio" :value="SIZE_TYPE.LG" v-model="sizeType">
            <label class="flex flex-col p-2 cursor-pointer bg-secondary text-white font-bold text-center peer-checked:bg-primary" for="radio_size-lg">
              Large
            </label>
          </div>
        </div>
      </div>

      <div>
        <h4 class="mb-3 text-md font-bold">Icon</h4>

        <label class="inline-flex items-center mb-2">
          <input
            type="checkbox"
            v-model="enableIcon"
            class="rounded p-2 border-gray-300 text-scarlet-600 shadow-sm focus:border-scarlet-300 focus:ring focus:ring-offset-0 focus:ring-scarlet-200 focus:ring-opacity-50"
          />
          <span class="text-gray-700 ml-2">Show Icon</span>
        </label>

        <h4 class="mb-3 text-md font-bold">Icon Position</h4>

        <div class="grid grid-cols-2 gap-2 w-full max-w-screen-sm">
          <div>
            <input class="hidden peer" id="radio_position-left" type="radio" name="radio" checked :value="'left'" v-model="iconPosition" :disabled="!enableIcon">
            <label :class="enableIcon
            ? 'flex flex-col p-2 cursor-pointer bg-secondary text-white font-bold text-center peer-checked:bg-primary'
            : 'flex flex-col p-2 cursor-default bg-silver text-secondary font-bold text-center'" for="radio_position-left">
              Left
            </label>
          </div>
          <div>
            <input class="hidden peer" id="radio_position-right" type="radio" name="radio" :value="'right'" v-model="iconPosition" :disabled="!enableIcon">
            <label :class="enableIcon
            ? 'flex flex-col p-2 cursor-pointer bg-secondary text-white font-bold text-center peer-checked:bg-primary'
            : 'flex flex-col p-2 cursor-default bg-silver text-secondary font-bold text-center'" for="radio_position-right">
              Right
            </label>
          </div>
        </div>
      </div>

    </div>
  </ControlsAddon>

  <EventsAddon />
</template>
