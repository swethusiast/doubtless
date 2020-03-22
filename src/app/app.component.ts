import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
    constructor(private authService: AuthService, private translate: TranslateService) {
        translate.addLangs([ 'en', 'ar' ]);
        translate.setDefaultLang('en');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
        translate.onLangChange.subscribe((event: LangChangeEvent) => {
            if (event.lang === 'ar') {
                (document.getElementById('rtlSheet') as HTMLButtonElement).disabled = false;
                (document.getElementById('ltrSheet') as HTMLButtonElement).disabled = true;
                document.dir = 'rtl';
            } else if (event.lang === 'en') {
                (document.getElementById('rtlSheet') as HTMLButtonElement).disabled = true;
                (document.getElementById('ltrSheet') as HTMLButtonElement).disabled = false;

                document.dir = 'ltr';
            }
        });
    }

    ngOnInit() {
        this.authService.aotoAuthUser();
    }
}
