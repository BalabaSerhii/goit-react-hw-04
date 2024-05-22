import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ addPage }) {
  return (
    <div>
      <button onClick={addPage} type="button" className={css.button}>
        Load more
      </button>
    </div>
  );
}