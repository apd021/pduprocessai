import Foundation
import WebKit
import AVFoundation

// Message handler dla text-to-speech
class TextToSpeechHandler: NSObject, WKScriptMessageHandler {
    private var synthesizer = AVSpeechSynthesizer()
    
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        guard message.name == "speakText",
              let body = message.body as? [String: Any],
              let text = body["text"] as? String else {
            return
        }
        
        let lang = body["lang"] as? String ?? "pl-PL"
        let rate = (body["rate"] as? NSNumber)?.floatValue ?? 0.85
        let pitch = (body["pitch"] as? NSNumber)?.floatValue ?? 1.0
        
        DispatchQueue.main.async {
            let utterance = AVSpeechUtterance(string: text)
            utterance.voice = AVSpeechSynthesisVoice(language: lang)
            utterance.rate = AVSpeechUtteranceDefaultSpeechRate * rate
            utterance.pitchMultiplier = pitch
            utterance.volume = 1.0
            
            self.synthesizer.speak(utterance)
        }
    }
}

