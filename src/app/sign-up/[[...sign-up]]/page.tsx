import { SignUp } from '@clerk/nextjs';
import { vstack } from '../../../../styled-system/patterns';

export default function Page() {
  return (
    <div
      className={vstack({
        alignItems: 'center',
        justifyContent: 'center',
        mt: '32',
        '& div:has(> a[href^="https://www.clerk"])': {
          opacity: '0',
        },
      })}
    >
      <SignUp />
    </div>
  );
}
