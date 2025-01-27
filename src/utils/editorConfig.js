const editorConfig = (setBody) => ({
  toolbar: [
    "undo redo | bold italic underline | bullist numlist | blockquote | codesample | link",
  ],
  plugins: [
    "link",
    "lists",
    "codesample", // Plugin untuk menampilkan dan menyunting kode
  ],
  menubar: false, // Menonaktifkan menu bar
  statusbar: false, // Menonaktifkan status bar
  height: 300, // Tinggi editor
  setup: (editor) => {
    editor.on("change", () => {
      setBody(editor.getContent());
    });
  },
});

export default editorConfig;
