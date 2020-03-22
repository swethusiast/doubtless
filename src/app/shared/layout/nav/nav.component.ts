import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router, Scroll } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: [ './nav.component.scss' ],
})
export class NavComponent implements OnInit {
    userIsAuthenticated = false;
    isMenuCollapsed = true;
    activeRoute = '';
    lang = '';
    constructor(
        public authService: AuthService,
        private router: Router,
        private viewportScroller: ViewportScroller,
        private translate: TranslateService,
    ) {
        this.router.events.pipe(filter((e) => e instanceof Scroll)).subscribe((e: any) => {
            this.activeRoute = '';
            if (e.position) {
                console.log(e.position);
                this.viewportScroller.scrollToPosition(e.position);
                this.activeRoute = '';
            } else if (e.anchor) {
                console.log(e.anchor);
                this.viewportScroller.scrollToAnchor(e.anchor);
                this.activeRoute = e.anchor;
            } else {
                this.viewportScroller.scrollToPosition([ 0, 0 ]);
            }
        });
    }

    ngOnInit(): void {
        this.authService.aotoAuthUser();
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authService.getAuthStatusListener().subscribe((isAuthenticated) => {
            this.userIsAuthenticated = isAuthenticated;
        });
        this.lang = this.translate.getDefaultLang();
    }
    switchLanguage(language: string) {
        this.translate.use(language);
        this.lang = language;
    }
    logout() {
        this.authService.logout();
    }
}
