import { css } from 'emotion';

import { colors } from '../styleVariables';

// emotions's template syntax is not used, since we want to have autocomplete and typechecking
export const styles = {
  button: css({
    borderRadius: 4,
    padding: '12px 24px',
    background: colors.medBlack,
  }),
}
