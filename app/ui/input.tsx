'user client'
import '../../app/ui/global.css'
import styles from '../../app/ui/input.module.css'

export default function ComponentInput({
  item,
  labelForm,
  register,
  errors,
  isSubmitting,
}: {
  item: string,
  labelForm: string
  register: any,
  errors: any
  isSubmitting: any
}) {


  const condition_1 = false;


  function solid(arg0: string): import("@fortawesome/fontawesome-svg-core").IconProp {
    throw new Error("Function not implemented.")
  }

  return (
    <>
      <div className={styles.groudInput}>
        <input
          className={ `${styles.input} ${errors[labelForm]?.message ? styles.inputError : ''}`}
          type="text"
          name={labelForm}
          disabled={isSubmitting}
          {...register(labelForm)}
          placeholder=' '
          />
        <label className={styles.label} htmlFor="body">{labelForm}</label>

        {errors[labelForm]?.message && <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg"
          height="16" width="16" viewBox="0 0 512 512">
          <path fill="#e60017" d="M504 256c0 137-111 248-248 248S8 393 8 256C8 119.1 
           119 8 256 8s248 111.1 248 248zm-248 50c-25.4 0-46 20.6-46 46s20.6 46 46 46 46-20.6
           46-46-20.6-46-46-46zm-43.7-165.3l7.4 136c.3 6.4 5.6 11.3 12 11.3h48.5c6.4 0 11.6-5 
           12-11.3l7.4-136c.4-6.9-5.1-12.7-12-12.7h-63.4c-6.9 0-12.4 5.8-12 12.7z" />
        </svg>}

      </div>
      <p className={styles.spanError}>{errors[labelForm]?.message}</p>
    </>

  )
}