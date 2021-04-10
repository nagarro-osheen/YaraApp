import { KeycloakService } from 'keycloak-angular';
import { environment } from '../environments/environment';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => keycloak.init({
    config: environment.keycloak, 
    initOptions: {
      checkLoginIframe: false
    },
    enableBearerInterceptor: false,
    bearerExcludedUrls: ['/assets', '/clients/public']
  });
}