<template>
  <div class="beian-footer-global">
    <span class="beian-copyright">© 2025</span>
    <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" class="beian-link">粤ICP备2022068881号-1</a>
    <span class="beian-sep">|</span>
    <span class="beian-maintain">徐大兵维护</span>
  </div>
</template>

<style scoped>
.beian-footer-global {
  text-align: center;
  font-size: 13.5px;
  margin: 18px 0 10px 0;
  letter-spacing: 0.2px;
  user-select: text;
  color: #888;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.2em;
}
.beian-copyright, .beian-maintain {
  color: #888;
}
.beian-link {
  color: #888;
  text-decoration: none;
  padding: 0 6px;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: color 0.18s, border 0.18s, background 0.18s;
}
.beian-link:hover, .beian-link:focus {
  color: #1560b2;
  background: #f7fafd;
  border: 1px solid #bfc4cc;
  text-decoration: underline;
}
.beian-sep {
  color: #d0d0d0;
  margin: 0 4px;
}
@media (max-width: 600px) {
  .beian-footer-global {
    font-size: 12.5px;
    margin: 14px 0 8px 0;
    gap: 0.3em;
  }
  .beian-link {
    padding: 2px 4px;
    font-size: 12.5px;
  }
}
</style>
