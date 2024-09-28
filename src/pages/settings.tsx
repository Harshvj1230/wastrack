import { TrendingUp, Settings, User } from "lucide-react";
import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const defaultSettings = {
  username: "",
  email: "",
  notifications: {
    email: true,
    push: true,
  },
  contentPreferences: "default",
  privacy: {
    shareData: false,
    trackActivity: false,
  },
  theme: {
    darkMode: false,
  },
};

export const SettingsPage = () => {
  const [settings, setSettings] = React.useState(() => {
    const savedSettings = localStorage.getItem("userSettings");
    return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
  });

  const handleInputChange = (key, value) => {
    setSettings((prevSettings) => {
      const newSettings = { ...prevSettings, [key]: value };
      localStorage.setItem("userSettings", JSON.stringify(newSettings));
      return newSettings;
    });
  };

  const handleSwitchChange = (key) => {
    setSettings((prevSettings) => {
      const newSettings = { ...prevSettings, [key]: !prevSettings[key] };
      localStorage.setItem("userSettings", JSON.stringify(newSettings));
      return newSettings;
    });
  };

  const handleNestedSwitchChange = (group, key) => {
    setSettings((prevSettings) => {
      const newSettings = {
        ...prevSettings,
        [group]: { ...prevSettings[group], [key]: !prevSettings[group][key] },
      };
      localStorage.setItem("userSettings", JSON.stringify(newSettings));
      return newSettings;
    });
  };

  const handleRadioChange = (value) => {
    setSettings((prevSettings) => {
      const newSettings = { ...prevSettings, contentPreferences: value };
      localStorage.setItem("userSettings", JSON.stringify(newSettings));
      return newSettings;
    });
  };

  return (
    <div className="text-slate-700 flex justify-center">
      <div className="md:w-1/2">
        <div className="text-custom">
          <h1 className="text-5xl h-14 font-light gradientDefault">Settings</h1>
          <p className="text-base mt-2 mb-4">
            Customize your preferences and manage your account settings below.
          </p>
          <div className="flex justify-start mt-5">
            <img
              src="https://github.com/shadcn.png"
              className="h-16 w-16 rounded-lg self-center"
            />
            <div>
              <p className="text-base ml-5 text-black !font-normal mt-2">
                Meet Patel.
              </p>
              <p className="text-base ml-5">Professional Account</p>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="mt-5">
          {/* Account Settings */}
          <AccordionItem value="account-settings" defaultOpen>
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <User size={18} className="mr-3" />
                Account Settings
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Update your personal information and manage your account
                details.
              </p>
              <div className="flex flex-col mt-2">
                <label className="text-sm">
                  Change Username:
                  <Input
                    type="text"
                    className="mt-1"
                    placeholder="Enter your username"
                    value={settings.username}
                    onChange={(e) =>
                      handleInputChange("username", e.target.value)
                    }
                  />
                </label>
                <label className="text-sm mt-2">
                  Change Email:
                  <Input
                    type="email"
                    className="mt-1"
                    placeholder="Enter your email"
                    value={settings.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </label>
                <p className="text-blue-900 mt-3 cursor-pointer">
                  Change Password
                </p>
                <Button className="mt-4">Save Changes</Button>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Notification Settings */}
          <AccordionItem value="notification-settings">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <TrendingUp size={18} className="mr-3" />
                Notifications
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Manage your notification preferences to stay updated on the
                latest news and alerts.
              </p>
              <div className="flex items-center justify-between mt-2">
                <span>Email Notifications</span>
                <Switch
                  checked={settings.notifications.email}
                  onCheckedChange={() =>
                    handleNestedSwitchChange("notifications", "email")
                  }
                />
              </div>
              <div className="flex items-center justify-between mt-2">
                <span>Push Notifications</span>
                <Switch
                  checked={settings.notifications.push}
                  onCheckedChange={() =>
                    handleNestedSwitchChange("notifications", "push")
                  }
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Content Preferences */}
          <AccordionItem value="content-preferences">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <TrendingUp size={18} className="mr-3" />
                Content Preferences
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Select your preferred news categories and sources to customize
                your feed.
              </p>
              <RadioGroup
                value={settings.contentPreferences}
                onValueChange={handleRadioChange}
              >
                <div className="flex items-center space-x-2 mt-3">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Default</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Comfortable</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">Compact</Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>

          {/* Privacy Settings */}
          <AccordionItem value="privacy-settings">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <TrendingUp size={18} className="mr-3" />
                Privacy Settings
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>Control your data sharing and privacy preferences.</p>
              <div className="flex items-center justify-between mt-2">
                <span>Share Data with Third Parties</span>
                <Switch
                  checked={settings.privacy.shareData}
                  onCheckedChange={() =>
                    handleNestedSwitchChange("privacy", "shareData")
                  }
                />
              </div>
              <div className="flex items-center justify-between mt-2">
                <span>Track Activity for Personalization</span>
                <Switch
                  checked={settings.privacy.trackActivity}
                  onCheckedChange={() =>
                    handleNestedSwitchChange("privacy", "trackActivity")
                  }
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Theme Settings */}
          <AccordionItem value="theme-settings">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <TrendingUp size={18} className="mr-3" />
                Theme Settings
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>Choose your preferred theme for the app interface.</p>
              <div className="flex items-center justify-between mt-2">
                <span>Dark Mode</span>
                <Switch
                  checked={settings.theme.darkMode}
                  onCheckedChange={() =>
                    handleNestedSwitchChange("theme", "darkMode")
                  }
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Logout Option */}
          <AccordionItem value="logout">
            <AccordionTrigger>
              <div className="flex justify-start items-center">
                <Settings size={18} className="mr-3" />
                Harmful settings
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Click to log out of your account. Make sure to save any changes
                before proceeding.
              </p>
              <Button variant="secondary" className="mt-2 w-full bg-red-600">
                Delete Account
              </Button>
              <Button variant="secondary" className="mt-2 w-full">
                Disable Account
              </Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
