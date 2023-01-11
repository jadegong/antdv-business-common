<!-- v0.0.1 2023/01/04 gqd Init version; -->
<!--        2023/01/11 gqd Add highlight styles; -->
<template>
  <div>
    <div class="code-preview-topline"><div></div></div>
    <div class="code-preview-icons">
      <a-tooltip
        :title="isCollapsed ? '显示代码' : '隐藏代码'"
      >
        <code-filled @click="onShowOrHideCodeIconClicked" />
      </a-tooltip>
    </div>
    <div v-if="!isCollapsed" class="code-preview-content">
      <pre class="language-html" v-html="code"></pre>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Prism from 'prismjs';
import { CodeFilled } from '@ant-design/icons-vue';

import 'prismjs/themes/prism.css';

export default defineComponent({
	name: 'CodePreview',
  components: {
    CodeFilled,
  },
  props: {
    sourceCode: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isCollapsed: true, // 是否折叠代码，默认折叠
    };
  },
  computed: {
    code() {
      return Prism.highlight(this.sourceCode, Prism.languages.html, 'html');
    },
  },
  methods: {
    onShowOrHideCodeIconClicked() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
})
</script>
<style scoped>
.code-preview-topline {
  width: 100%;
  padding: 20px 0 12px;
}
.code-preview-topline div {
  height: 1px;
  border-top: 1px dashed #888888;
}
.code-preview-icons {
  text-align: center;
  padding: 4px 0;
  color: #888;
  font-size: 16px;
}
.code-preview-content {
  padding: 20px;
}
</style>
