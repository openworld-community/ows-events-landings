import { safeDestr } from 'destr';

type Result<T, E> = { success: true; value: T } | { success: false; error: E };

export function JSONparse<T>(value: unknown): Result<T, unknown> {
   try {
      return { success: true, value: safeDestr<T>(value) };
   } catch (e) {
      return { success: false, error: e };
   }
}
