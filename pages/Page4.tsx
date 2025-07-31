import {
  Avatar,
  AvatarGroup,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  HR,
} from "flowbite-react";

export const Page4 = () => {
  return (
    <>
      <div className="mb-12 text-5xl dark:text-white">Page 4 - Avatar</div>
      <div className="flex flex-col gap-2">
        <h1 className="mb-4 text-4xl dark:text-white">Default Avatar</h1>
        <div className="flex flex-wrap gap-2">
          <Avatar
            img="/images/people/profile-picture-5.jpg"
            alt="avatar of Jese"
            rounded
          />
          <Avatar img="/images/people/profile-picture-5.jpg" />
        </div>

        <HR />
        <h1 className="mb-4 text-4xl dark:text-white">Avatar with Border</h1>
        <div className="flex flex-wrap gap-2">
          <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered />
          <Avatar img="/images/people/profile-picture-5.jpg" bordered />
        </div>

        <HR />
        <h1 className="my-3 text-4xl dark:text-white">Avatar Placeholder</h1>
        <div className="flex flex-wrap gap-2">
          <Avatar />
          <Avatar rounded />
        </div>

        <HR />
        <h1 className="mb-4 text-4xl dark:text-white">Placeholder Initials</h1>
        <div className="flex flex-wrap gap-2">
          <Avatar placeholderInitials="RR" />
          <Avatar placeholderInitials="RR" rounded />
        </div>

        <HR />
        <h1 className="mb-4 text-4xl dark:text-white">Dot Indicator</h1>
        <div className="flex flex-wrap gap-2">
          <Avatar img="/images/people/profile-picture-5.jpg" status="online" />
          <Avatar
            img="/images/people/profile-picture-5.jpg"
            rounded
            status="busy"
            statusPosition="top-right"
          />
          <Avatar
            img="/images/people/profile-picture-5.jpg"
            status="offline"
            statusPosition="bottom-left"
          />
          <Avatar
            img="/images/people/profile-picture-5.jpg"
            rounded
            status="away"
            statusPosition="bottom-right"
          />
        </div>

        <HR />
        <h1 className="mb-4 text-4xl dark:text-white">Stacked Layout</h1>

        <div className="flex flex-wrap gap-2">
          <AvatarGroup>
            <Avatar
              img="/images/people/profile-picture-1.jpg"
              rounded
              stacked
            />
            <Avatar
              img="/images/people/profile-picture-2.jpg"
              rounded
              stacked
            />
            <Avatar
              img="/images/people/profile-picture-3.jpg"
              rounded
              stacked
            />
            <Avatar
              img="/images/people/profile-picture-4.jpg"
              rounded
              stacked
            />
            <Avatar
              img="/images/people/profile-picture-5.jpg"
              rounded
              stacked
            />
          </AvatarGroup>
          <AvatarGroup>
            <Avatar
              img="/images/people/profile-picture-1.jpg"
              rounded
              stacked
            />
            <Avatar
              img="/images/people/profile-picture-2.jpg"
              rounded
              stacked
            />
            <Avatar
              img="/images/people/profile-picture-3.jpg"
              rounded
              stacked
            />
            <Avatar
              img="/images/people/profile-picture-4.jpg"
              rounded
              stacked
            />
            {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
              <Badge color="gray" className="px-2 py-1 text-xs font-medium">
                +99
              </Badge>
            </div> */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
              <span className="text-sm font-medium text-gray-700"> +99</span>
            </div>
            {/* <Avatar.Counter total={99} href="#" /> */}
          </AvatarGroup>
        </div>

        <HR />
        <h1 className="mb-4 text-4xl dark:text-white">Avatar With Text</h1>
        <Avatar img="/images/people/profile-picture-5.jpg" rounded>
          <div className="space-y-1 font-medium dark:text-white">
            <div>Jese Leos</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Joined in August 2014
            </div>
          </div>
        </Avatar>

        <HR />
        <h1 className="mb-4 text-4xl dark:text-white">Avatar DropDown</h1>
        <Dropdown
          label={
            <Avatar
              alt="User settings"
              img="/images/people/profile-picture-5.jpg"
              rounded
            />
          }
          arrowIcon={false}
          inline
        >
          <DropdownHeader>
            <span className="block text-sm">Bassel Bitar</span>
            <span className="block truncate text-sm font-medium">
              Bassel@Bitar.com
            </span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>

        <HR />
        <h1 className="mb-4 text-4xl dark:text-white">Avatars With Colors</h1>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            <Avatar
              img="/images/people/profile-picture-5.jpg"
              rounded
              bordered
              color="gray"
            />
            <Avatar
              img="/images/people/profile-picture-5.jpg"
              rounded
              bordered
              color="light"
            />
            <Avatar
              img="/images/people/profile-picture-5.jpg"
              rounded
              bordered
              color="purple"
            />
            <Avatar
              img="/images/people/profile-picture-5.jpg"
              rounded
              bordered
              color="success"
            />
            <Avatar
              img="/images/people/profile-picture-5.jpg"
              bordered
              rounded
              color="pink"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Avatar
              img="/images/people/profile-picture-5.jpg"
              bordered
              color="gray"
            />
            <Avatar
              img="/images/people/profile-picture-5.jpg"
              bordered
              color="light"
            />
            <Avatar
              img="/images/people/profile-picture-5.jpg"
              bordered
              color="purple"
            />
            <Avatar
              img="/images/people/profile-picture-5.jpg"
              bordered
              color="success"
            />
            <Avatar
              img="/images/people/profile-picture-5.jpg"
              bordered
              color="pink"
            />
          </div>
        </div>

        <HR />
        <h1 className="mb-4 text-4xl dark:text-white">
          Avatars With Different Sizes
        </h1>
        <div className="flex flex-wrap items-center gap-2">
          <Avatar img="/images/people/profile-picture-5.jpg" size="xs" />
          <Avatar img="/images/people/profile-picture-5.jpg" size="sm" />
          <Avatar img="/images/people/profile-picture-5.jpg" size="md" />
          <Avatar img="/images/people/profile-picture-5.jpg" size="lg" />
          <Avatar img="/images/people/profile-picture-5.jpg" size="xl" />
        </div>
      </div>
    </>
  );
};
