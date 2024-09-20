import { useAppStore } from '../stores/useAppStore';

export default function Indexpage() {
  useAppStore((state) => state.categories);
  return (
    <>
      <h1>Inicio</h1>
    </>
  );
}
