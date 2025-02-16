import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  // menu: any;
  // logoUrl: string = "";
  // iconUrl: string = "";
  // toggle: any = true;
  // menuItems: MenuItem[] = [];
  // urlRoute: string = "";
  // currentUrl: string = ''
  // @ViewChild("sideMenu") sideMenu!: ElementRef;
  // @Output() mobileMenuButtonClicked = new EventEmitter();
  // private subscription!: Subscription;
  // isAdd: boolean = false;
  // constructor(
  //   private router: Router,
  //   public translate: TranslateService,
  //   private eventbus: EventbusService,
  //   private TokenStorageService: TokenStorageService,
  //   private storageService: StorageService,
  //   private userService: UserProfileService,
  // ) {
  //   translate.setDefaultLang("en");
  // }
  // ngOnInit() {
  //    // Subscribe to add
  //   this.subscription = this.eventbus.on(Events.isDiscard, (res: any) => {
  //     if (res.data) {
  //       this.currentUrl = res.currentUrl;
  //     }
  //   });
  //   this.logoUrl = this.TokenStorageService.getCurrentUser().imageCompanyUrl;
  //   this.iconUrl = this.TokenStorageService.getCurrentUser().iconCompanyUrl;
  //   this.loadMenuItems();
  //   // Menu Items
  //   this.menuItems = MENU;
  //   this.router.events.subscribe((event) => {
  //     if (document.documentElement.getAttribute("data-layout") != "twocolumn") {
  //       if (event instanceof NavigationEnd) {
  //         this.initActiveMenu();
  //       }
  //     }
  //   });
  // }
  // loadMenuItems() {
  //   var token = localStorage.getItem("token");
  //   if (token) {
  //     this.permSrv.setPermissionsFromToken(token);
  //   }
  //   this.menuItems = MENU; // Replace with actual data fetching logic if needed
  // }
  // // Add this trackById function
  // trackById(index: number, item: any): number {
  //   return item.id;
  // }
  // /***
  //  * Activate droup down set
  //  */
  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.initActiveMenu();
  //   }, 0);
  // }

  // removeActivation(items: any) {
  //   items.forEach((item: any) => {
  //     item.classList.remove("active");
  //   });
  // }

  // toggleItem(item: any) {
  //   this.menuItems.forEach((menuItem: any) => {
  //     if (menuItem == item) {
  //       menuItem.isCollapsed = !menuItem.isCollapsed;
  //     } else {
  //       menuItem.isCollapsed = true;
  //     }
  //     if (menuItem.subItems) {
  //       menuItem.subItems.forEach((subItem: any) => {
  //         if (subItem == item) {
  //           menuItem.isCollapsed = !menuItem.isCollapsed;
  //           subItem.isCollapsed = !subItem.isCollapsed;
  //         } else {
  //           subItem.isCollapsed = true;
  //         }
  //         if (subItem.subItems) {
  //           subItem.subItems.forEach((childitem: any) => {
  //             if (childitem == item) {
  //               childitem.isCollapsed = !childitem.isCollapsed;
  //               subItem.isCollapsed = !subItem.isCollapsed;
  //               menuItem.isCollapsed = !menuItem.isCollapsed;
  //             } else {
  //               childitem.isCollapsed = true;
  //             }
  //             if (childitem.subItems) {
  //               childitem.subItems.forEach((childrenitem: any) => {
  //                 if (childrenitem == item) {
  //                   childrenitem.isCollapsed = false;
  //                   childitem.isCollapsed = false;
  //                   subItem.isCollapsed = false;
  //                   menuItem.isCollapsed = false;
  //                 } else {
  //                   childrenitem.isCollapsed = true;
  //                 }
  //               });
  //             }
  //           });
  //         }
  //       });
  //     }
  //   });
  // }

  // activateParentDropdown(item: any) {
  //   item.classList.add("active");
  //   let parentCollapseDiv = item.closest(".collapse.menu-dropdown");

  //   if (parentCollapseDiv) {
  //     parentCollapseDiv.parentElement.children[0].classList.add("active");
  //     if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
  //       if (
  //         parentCollapseDiv.parentElement.closest(".collapse")
  //           .previousElementSibling
  //       )
  //         parentCollapseDiv.parentElement
  //           .closest(".collapse")
  //           .previousElementSibling.classList.add("active");
  //       if (
  //         parentCollapseDiv.parentElement
  //           .closest(".collapse")
  //           .previousElementSibling.closest(".collapse")
  //       ) {
  //         parentCollapseDiv.parentElement
  //           .closest(".collapse")
  //           .previousElementSibling.closest(".collapse")
  //           .previousElementSibling.classList.add("active");
  //       }
  //     }
  //     return false;
  //   }
  //   return false;
  // }

  // updateActive(event: any, item: any) {
  // //  console.log(item);
  //   const ul = document.getElementById("navbar-nav");
  //   if (ul) {
  //     const items = Array.from(ul.querySelectorAll("a.nav-link"));
  //     this.removeActivation(items);
  //   }
  //   this.activateParentDropdown(event.target);
  //   if (this.userService.isDataChanged()) {
  //     this.currentUrl = this.storageService.getItem('currentUrl') as string;
  //     this.router.navigateByUrl(this.currentUrl);
  //     // Create an event object adhering to the EmitEvent interface
  //     const event: EmitEvent = {
  //       name: Events.sideBarClick,
  //       value: true,
  //     };
  //     // Emit the event using the eventbus service
  //     this.eventbus.emit(event);
  //   }
  // }

  // initActiveMenu() {
  //   let pathName = window.location.pathname;
  //   // Check if the application is running in production
  //   if (environment.production) {
  //     // Modify pathName for production build
  //     pathName = pathName.replace("/velzon/angular/creative", "");
  //   }

  //   const active = this.findMenuItem(pathName, this.menuItems);
  //   this.toggleItem(active);
  //   const ul = document.getElementById("navbar-nav");
  //   if (ul) {
  //     const items = Array.from(ul.querySelectorAll("a.nav-link"));
  //     let activeItems = items.filter((x: any) =>
  //       x.classList.contains("active")
  //     );
  //     this.removeActivation(activeItems);

  //     let matchingMenuItem = items.find((x: any) => {
  //       if (environment.production) {
  //         let path = x.pathname;
  //         path = path.replace("/velzon/angular/creative", "");
  //         return path === pathName;
  //       } else {
  //         return x.pathname === pathName;
  //       }
  //     });
  //     if (matchingMenuItem) {
  //       this.activateParentDropdown(matchingMenuItem);
  //     }
  //   }
  // }

  // private findMenuItem(pathname: string, menuItems: any[]): any {
  //   for (const menuItem of menuItems) {
  //     if (menuItem.link && menuItem.link === pathname) {
  //       return menuItem;
  //     }

  //     if (menuItem.subItems) {
  //       const foundItem = this.findMenuItem(pathname, menuItem.subItems);
  //       if (foundItem) {
  //         return foundItem;
  //       }
  //     }
  //   }

  //   return null;
  // }
  // /**
  //  * Returns true or false if given menu item has child or not
  //  * @param item menuItem
  //  */
  // /*  hasItems(item: MenuItem) {
  //   return item.subItems !== undefined ? item.subItems.length > 0 : false;
  // }   */
  // hasItems(item: MenuItem): boolean {
  //   return !!item.subItems && item.subItems.length > 0;
  // }
  // /**
  //  * Toggle the menu bar when having mobile screen
  //  */
  // toggleMobileMenu(event: any) {
  //   var sidebarsize =
  //     document.documentElement.getAttribute("data-sidebar-size");
  //   if (sidebarsize == "sm-hover-active") {
  //     document.documentElement.setAttribute("data-sidebar-size", "sm-hover");
  //   } else {
  //     document.documentElement.setAttribute(
  //       "data-sidebar-size",
  //       "sm-hover-active"
  //     );
  //   }
  // }

  // /**
  //  * SidebarHide modal
  //  * @param content modal content
  //  */
  // SidebarHide() {
  //   document.body.classList.remove("vertical-sidebar-enable");
  // }
}
