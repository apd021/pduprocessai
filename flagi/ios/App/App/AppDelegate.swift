import UIKit
import Capacitor
import AVFoundation
import WebKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?
    private var ttsHandler: TextToSpeechHandler?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
        
        // Utwórz message handler
        ttsHandler = TextToSpeechHandler()
        
        // Użyj prostszego podejścia - dodaj handler po krótkim opóźnieniu
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.0) {
            self.setupMessageHandler()
        }
        
        return true
    }
    
    @objc func setupMessageHandler() {
        // Znajdź WebView w hierarchii view controllerów
        guard let window = self.window,
              let rootViewController = window.rootViewController,
              let handler = ttsHandler else {
            print("⚠️ Nie można znaleźć window, rootViewController lub handler")
            return
        }
        
        // Funkcja pomocnicza do znajdowania WebView - bardziej agresywna wyszukiwanie
        func findWebView(in viewController: UIViewController) -> WKWebView? {
            // Sprawdź wszystkie subviewy rekurencyjnie
            func searchInView(_ view: UIView) -> WKWebView? {
                if let webView = view as? WKWebView {
                    return webView
                }
                for subview in view.subviews {
                    if let webView = searchInView(subview) {
                        return webView
                    }
                }
                return nil
            }
            
            // Sprawdź view controller
            if let webView = searchInView(viewController.view) {
                return webView
            }
            
            // Sprawdź dzieci
            for child in viewController.children {
                if let webView = findWebView(in: child) {
                    return webView
                }
            }
            
            // Sprawdź presented view controller
            if let presented = viewController.presentedViewController {
                if let webView = findWebView(in: presented) {
                    return webView
                }
            }
            
            return nil
        }
        
        // Spróbuj kilka razy z opóźnieniem
        var attempts = 0
        let maxAttempts = 5
        
        func tryRegisterHandler() {
            attempts += 1
            
            if let webView = findWebView(in: rootViewController) {
                webView.configuration.userContentController.add(handler, name: "speakText")
                print("✅ Message handler 'speakText' został zarejestrowany (próba \(attempts))")
            } else if attempts < maxAttempts {
                print("⚠️ Nie znaleziono WebView, próba \(attempts)/\(maxAttempts)")
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                    tryRegisterHandler()
                }
            } else {
                print("❌ Nie znaleziono WebView po \(maxAttempts) próbach")
            }
        }
        
        tryRegisterHandler()
    }

    func applicationWillResignActive(_ application: UIApplication) {
        // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
        // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
    }

    func applicationDidEnterBackground(_ application: UIApplication) {
        // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
        // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
    }

    func applicationWillEnterForeground(_ application: UIApplication) {
        // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
    }

    func applicationDidBecomeActive(_ application: UIApplication) {
        // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
    }

    func applicationWillTerminate(_ application: UIApplication) {
        // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
    }

    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
        // Called when the app was launched with a url. Feel free to add additional processing here,
        // but if you want the App API to support tracking app url opens, make sure to keep this call
        return ApplicationDelegateProxy.shared.application(app, open: url, options: options)
    }

    func application(_ application: UIApplication, continue userActivity: NSUserActivity, restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
        // Called when the app was launched with an activity, including Universal Links.
        // Feel free to add additional processing here, but if you want the App API to support
        // tracking app url opens, make sure to keep this call
        return ApplicationDelegateProxy.shared.application(application, continue: userActivity, restorationHandler: restorationHandler)
    }

}
